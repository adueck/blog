---
title: "The simplest possible explanation of monads"
date: "2024-12-05"
published: false
---

People have over-complicated what monads are because they focus on all kinds of complex examples and use cases. I'm going to try to give a very basic explanation of monads for programmers, focussing on **what mondas actually are.** To do that, we first need to introduce functions and functors.

## Functions

Functions take one value and give us another value. In goes one type, and out comes another.

A -> B

For example, we can have a function that takes a number, and gives us a string.

(Some function examples)

We'll use letters to represent any one of these types.

## Functors

We can also "wrap" a type in a kind of box.

[A]

This "box" could be a whole bunch of things. It could be an object with the type A in it.

```
{
  type: "box",
  size: 4,
  contents: A,
}
```

Or it could be an array of As

```
[A, A, A, A]
```

Or it could be a tree full of As!

(PIC OF TREES FULL OF As)

Or all kinds of other data structures!

These boxes can be called **functors** if we define:

1. How to put something in a box
2. How to apply a function to their contents

For example, to make our first "box" object into a function we need to define a way to apply the function A -> B to it:

We'll make a function `fmapBox` where we can take a Box of A, a function A => B, and then get a Box of B.

```ts
type Box<A> = {
  type: "box";
  size: number;
  contents: A;
};
```

We can make this `Box` into a functor by explaining how we can apply a function `(A) => B` to change a `Box` of A into a `Box` of B.

Diagram of boxes being applied

```ts
type Box<A> = {
  type: "box";
  size: number;
  contents: A;
};

function fmapBox<A, B>(box: Box<A>, f: (a: A) => B): Box<B> {
  return {
    ...box,
    contents: f(box.contents),
  };
}
```

If our "box" is an array, we can make it a functor by applying the function to all the items in the array

```ts
type Box<A> = A[];

function fmapBox<A, B>(box: Box<A>, f: (a: A) => B): Box<B> {
  return box.map(f);
}
```

Picture of applying function ...

Same thing for applying to the tree...

So now we see what a **functor** is. Data types can be wrapped in a box. That "box" becomes a functor when we define.

1. How to put something in it.
2. How to apply a function to the contents of the box.

## Monads!

Well now we're ready to look at what monads are.

A -> B

B -> C

A -> B -> C

But what if we have a couple of functions like this:

A -> [B]

B -> [C]

How do we put those together? They don't line up!

What we need is a _special way of putting the functions together_. When we define this special way of putting them together, we will have a monad!

If our box is already a functor, we can apply the second function to the first one like this

A -> [B]

B -> [C]

```ts
function kliesCBox<A, B, C>(
  fst: (a: A) => [B],
  snd: (b: B) => [C]
): (a: A) => [C] {
  return (a: A) => {
    const bBox = fst(a);
    const cDoub = fmapBox(bBox, snd);
    return flattenBox(cDoub);
  };
}
```

Which gives us

[[C]]

But wait, now we have a thing in two boxes! Now we just need to define a way to _flatten_ the boxes together.

[[A]] -> [A]

Now we can take any box value, and apply a function like this:

[A]

apply the function to the A inside the box

A -> [B]

which gives us [[B]]

then flatten it!

Getting us [B]!

```ts
function bindBox<A>(box: Box<A>, f: (a: A) => Box<B>): Box<B> {
  const mapped = fmapBox(box, f);
  const flattened = flattenBox(mapped);
  return flattened;
}
```

Example, with array
