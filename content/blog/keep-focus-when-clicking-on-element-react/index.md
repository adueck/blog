---
title: How to keep an input in focus when clicking on other elements in React
date: "2022-09-19"
description: "Sometimes in a React application you want to have an input which is the main focus. You might want the cursor to stay focussed on that input even if you click around on different things..."
---

Sometimes in a React application you want to have an input which is the main focus. You might want the cursor to stay focussed on that input even if you click around on different things. Some apps, like dictionaries, have a main search bar, and the user might not want to have to keep refocussing there.

You could try using the `onBlur` attribute to set the focus back on the element whenever it moves off of it:

```jsx
<input
    id="search-bar"
    type="text"
    onBlur={e => e.target.focus()}
/>
```

But there's a big problem with this. You won't be able to use any other text `input` elements because whenever you try to type in them, the focus will just go back to the first element. This is not good.

We need to be able to keep our main text focused when we click on other parts of the page, but allow the focus to change when we select another `input` element.

It turns out that when on `onBlur` event occurs, [you can find out what element the focus went away *to*](https://stackoverflow.com/a/33325953/8620945) by accessing [realatedTarget](https://www.w3.org/TR/uievents/#idl-focusevent).

```jsx
<input
    id="search-bar"
    type="text"
    onBlur={e => {
        // 👇 This will give us the element the user clicked on
        e.relatedTarget
        // We can look at this and decide if we still want to
        // re-focus our original element
        e.target.focus();
    }}
/>
```

If the user clicked on something that was not an `input` element (or something without a `tabIndex` attribute), then `e.relatedTarget` will be `null`. Because of this we can do something really simple like this:

```jsx
<input
    id="search-bar"
    type="text"
    onBlur={e => {
        if (!e.relatedTarget) {
            e.target.focus();
        }
    }}
/>
```

Now we have the solution we want:

- When you click somewhere else that's *not* an `input` element, your original input will stay focussed and the cursor will keep blinking away.
- When you on another `input` element the focus/cursor will happily move over there.

When you set an element up with this kind of aggressive focus-holding, it will always stay focussed until you tab-out or click on another `input` element.

You could also add your own logic to affect the behaviour depeding on what *type* of `input` element a user clicked on.

This is a bit of an unusual use case, so **use it wisely**. Most of the time you would not want the input to stay this aggressively focussed, especially on mobile.

<iframe src="https://codesandbox.io/embed/fervent-pine-hzxmu0?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="react-focus-demo"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; icrophone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

