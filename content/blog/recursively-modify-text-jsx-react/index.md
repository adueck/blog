---
title: Using recursion to modify all the text in a React/JSX element
date: "2022-09-20"
description: "How can we write a function to modify all the text found inside of a React/JSX element, even when its full of other nodes and texts? This is a good problem to learn about recursion with..."
image: recursion-meme.jpg
---

How can we write a function to modify all the text found inside of a React/JSX element, even when its full of other nodes and text? This is a good problem to learn about recursion with.

Let's say we want to process a string with a function. That's easy.

```ts
function changeFavoriteAnimal(s: string): string {
    return s.replace(/cat/g, "dog");
}
changeFavoriteAnimal("I like cats");
// "I like dogs"
```

What if we need to modify some text in a React/JSX node? We could just look inside be accessing the text in `props.children`, and modify that:

```ts

function changeFavoriteAnimal(node: JSX.Element): JSX.Element {
    return {
        ...node,
        props: {
            ...node.props,
            children: node.props.children.replace(/cat/g, "dog"),
        },
    };
}
changeFavoriteAnimal(<div>I like cats</div>);
// <div>I like dogs</div>
```

But that only works if we just have one node with plain text inside of it.

What if we want to modify all the strings inside of a big, nested React/JSX node?

```tsx
changeFavoriteAnimal(
    <div>
        <p>I <em>really</em> like <strong>cats</strong></p>
        <p>My friend has <em>sooo</em> many cats</p>    
    </div>
);
// How can we get this function to output this: 🤔
//    <div>
//        <p>I <em>really</em> like <strong>dogs</strong></p>
//        <p>My friend has <em>sooo</em> many dogs</p>    
//    </div>
```

Now we have a complicated glob of data, and we need to somehow reach down in and modify all the text we can find in it. As we dig in we'll find strings and elements nested inside other elements with strings and so on... The data structures keep repeating themselves, so this looks like a perfect job for **recursion!**

I've been working through [How To Design Programs](https://htdp.org), and I've enjoyed learning about how to use recursion to easily process these kinds of data structures. What we have with the React/JSX nodes are basically [S-expressions](https://htdp.org/2022-8-7/Book/part_four.html#%28part._sec~3asexp%29), so we can process them in the same way. Don't worry if you didn't understand that nerdy LISP term I just used. Allow me to explain.

If we massively simplify the idea of S-expressions and adapt them to JS/TS, we could have something like this:

<h5 id="s-expr-definition">A <strong>"TS-Expression"</strong> is one of the following:</h5>

- a **string**
- an array of ["TS-Expression"](#s-expr-definition)s (recursion ⤴)

We have a type of data that *refers to itself* or is *recursive*. And that means we can make all kinds of crazy, nested structures.

```ts
type TSExpression = string | TSExpression[];

const a: TSExpression = "cat";
const b: TSExpression = ["a", "cat"];
const c: TSExpression = ["a", "cat", ["is", "a", [["cat"], "to"], "me"]];
```

We have a very simple type definition that can create very complex pieces of data. But because the definition is simple, processing the data is also simple!

```ts
function changeAnimalTS(s: TSExpression): TSExpression {
    // we know that s is either going to be
    //  - a string
    //  - an array of TSExpressions
    // so we have two options of what to do

    // 1. If it's a string, process it
    if (typeof s === "string") {
        return s.replace(/cat/g, "dog");
    }
    // 2. If it's an array of TSExpressions call the function again
    // on each item in the array
    return s.map(toUpperCaseTS);
}

toUpperCaseTS(["a", "cat", ["is", "a", [["cat"], "to"], "me"]]);
// ["a", "dog", ["is", "a", [["dog"], "to"], "me"]]
```

Now we can see how the React/JSX Elements follow a similar definition. (Note: I'm going to really [simplify things](https://stackoverflow.com/a/58123882/8620945) for our purposes here.)

<h5 id="node-definition">A <strong>Node</strong> is one of the following:</h5>

- a **string**
    - ie. `"I like cats"`
- or a **Element**
    - ie. `<div>I like cats</div>`

And when we look inside that JSX/React element we have it's children.

##### The children of an **Element** is one of the following:

- nothing
    - ie. `undefined` or `null`
- a **Node** (back to the [definition above](#node-definition) ⤴)
    - ie. `<div>I like cats</div>`
    - or `"I like cats"`
- or an **array of Nodes**
    - ie. `["I like", <span><em>friendly</em> cats</span>, "so much"]`

Notice how, again, these data definitions refer back to each other. An array of nodes can contain elements, which can contain another array of nodes, and so on possibly forever.

This means we can use **recursion** to process the data in the same way. But first, another ridiculous example of recusion... 

![Recursion Meme](./recursion-meme.jpg)

A **Kid with a bed** has:
 - nothing under it  
 - a monster under it  
 - a kid with a bed under it (recursion ⤴)  

```
Look dad, there's a monster!

    Look under the bed and see

    if There's a monster there
        Deal with it
        Stop
    if There's nothing there
        Stop
    if There's another kid complaining to his dad about the monster
        Look dad, there's a monster! (recursion ⤴)
```

So you can see that this could go on forever until you actually get to see what's under the bed.

In the same way, we're going to keep looking down into our React elements until we get to the bottom (the monsters/text) and deal with them all.

```
Change all the text inside an element:

    if There's nothing inside
        Stop
    if There's text inside
        Change the text
        Stop
    if There's an array of nodes iside
        Change all the text inside EACH element (recursion ⤴)
    if There's just one node inside 
        Change all the text inside that element (recursion ⤴)
```

Now let's write some code for that in TypeScript...

```tsx
type Node = React.ReactElement | string | undefined;

function JSXModifyText(e: Node, modifier: (s: string) => string): Node {
  // a. it's nothing. return and stop.
  if (!e) {
    return e;
  }
  // b. it's text. modify, return and stop.
  if (typeof e === "string") {
    return modifier(e);
  }
  // we have an element with something inside
  // let's return the outside and recursively work on the inside
  return {
    ...e,
    props: {
      ...e.props,
      children:
        // c. There's an array of nodes inside -> repeat for each one ⤴
        Array.isArray(e.props.children)
          ? e.props.children.map((x: Node) => JSXModifyText(x, modifier))
          // d. There's just one node inside -> repeat for it ⤴
          : JSXModifyText(e.props.children, modifier),
    }
  };
}
```

This can be pretty powerful as we can pass any function to modify all the text in any tree of nodes. Have a look at what this code sandbox can do. Notice how with that simple function it reaches down and changes all the text, even stuff buried deep in the table, etc.

<iframe src="https://codesandbox.io/embed/jsx-text-transformation-jql4f7?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:650px; border:0; border-radius: 4px; overflow:hidden;"
    title="jsx-text-transformation"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

#### Note:

I mentioned earlier that I have **oversimplified things** when talking about JSX elements. In TypeScript the type `JSX.Element` covers [a bunch of other things](https://stackoverflow.com/a/58123882/8620945) including function components etc. The code above works if you just have elements with text, but if you have these other types of `JSX.Element` you will need to handle those in the code as well. 

