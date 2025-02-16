---
title: Making totally offline-available PWAs with Vite and React
image: no-wifi.jpg
date: "2023-02-02"
---

[PWA](https://web.dev/progressive-web-apps)s (Progressive Web Apps) are great. They let you make any website into an app that can be installed and used across different platforms and devices.

Especially with SPA (Single-page applications), we can use service workers to **make a totally self-contained, offline-available app**, that people can access offline, whether they're visiting the site again without internet or they've installed it as an app on their phone.

Why would you need this? Well, not everyone has internet access all the time, and you might want to make a reference app or some sort of learning tool where people could access all the content even without any internet connection.

![no wifi](./no-wifi.jpg)

<p style={{ fontSize: "small", textAlign: "center" }}><a href="https://www.freepik.com/free-vector/no-connection-concept-illustration_13795572.htm#query=no%20wifi%20signal&position=3&from_view=keyword">Image by storyset</a> on Freepik</p>

However, when we try to do this we run into a couple of problems:

- Service workers are complicated and full of pitfalls
- Many of PWA plugins for a lot of frameworks **don't actually make everything offline by default**.

As I've made PWAs, I've been a bit frustrated at times how difficult it can be to get everything available offline. [`gatsby-plugin-offline`](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/#available-options) will only cache pages/routes once a user visits them, but allow you to specify which pages to pre-cache, `next-pwa` takes [a _lot_ of work](https://dev.to/sfiquet/precaching-pages-with-next-pwa-31f2) to get the app the work offline.

In the past I've used [Create React App](https://create-react-app.dev/) to make SPA React applications that just worked and were totally available offline. But unfortunately they [took out the built-in service worker](https://github.com/facebook/create-react-app/issues/9776), and now it [seems to be abandoned](https://github.com/facebook/create-react-app/issues/11770#issuecomment-1397342797). So I've moved over to using [Vite](https://vitejs.dev/) and I'm really happy with it!

There is a fantastic plugin called [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) that takes care of everything for creating PWAs out of Vite sites. But because it's so powerful and customizable, it can take a while to get through the documentation and figure out how to customize things.

## How to make a SPA totally offline-available with `vite-plugin-pwa`

For those who simply want to **take a React SPA and make it fully available offline**, here are a few simple steps you can follow:

Start a vite react project

```
yarn create vite my-pwa --template react-ts
```

Install `vite-pwa`

```
yarn add vite-plugin-pwa -D
```

Add `vite-plugin-pwa` to your `vite.config.ts`

```ts
// vite.config.ts
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
});
```

Make a web manifest with icons (you can use [a tool like this](https://www.simicart.com/manifest-generator.html/)).

Put the icons in your `/public` folder and the web manifest into the `VitePWA()` config:

```ts
// vite.config.ts
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
                manifest: {
                "theme_color": "#f69435",
                "background_color": "#f69435",
                "display": "standalone",
                "scope": "/",
                "start_url": "/",
                "short_name": "vite test",
                "description": "testing vite pwa",
                "name": "vite test",
                "icons": [
                    {
                        "src": "/icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-256x256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-384x384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
            },
        ),
    ],
});
```

Now you should have a working, installable PWA! But there's one problem. If you have image assets in your public folder, or if you try to import images in your app like this:

```tsx
import myImage from "./my-image.svg";

export default () => (
  <div>
    <img src={myImage} />
  </div>
);
```

You'll find the images aren't cached. Again, some people may not want to cache everything, but for us, we're trying to make an application that's **fully cached, fully offline-available**.

To do that we just need to add a few more lines to our `VitePWA()` plugin config:

```ts
// vite.config.ts
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // add this to cache all the imports
            workbox: {
                globPatterns: ["**/*"],
            },
            // add this to cache all the
            // static assets in the public folder
            includeAssets: [
                "**/*",
            ],
            manifest: {
                "theme_color": "#f69435",
                "background_color": "#f69435",
                "display": "standalone",
                "scope": "/",
                "start_url": "/",
                "short_name": "Vite PWA",
                "description": "Vite PWA Demo",
                "name": "Vite PWA",
                "icons": [
                    {
                        "src": "/icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-256x256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-384x384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "/icon-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ],
            },
        ),
    ],
});
```

If you don't want to cache absolutely _everything_ (you might have some big audio or video files), you can adjust the globs accordingly.

There you go! Now you can build your game, educational tool, docs site, or whatever you want and serve it as an installable, totally offline-available app.

## Handling Updates

One of the tricky things about service workers and PWA is how to handle updating the page and letting the user see the latest version of the page, and not just the version they cached on the last visit.

By default, if a visitor is returning to the the page/app, they will see the version that was cached on their last visit. It will only show a new, updated version on the next visit/reload. But we can let them know that there is an update and [prompt them](https://vite-pwa-org.netlify.app/guide/prompt-for-update.html) to reload the page and see the latest version right away.

To do this, we can add a bit of code in `main.tsx`

```tsx
// /main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

If you're using TypeScript (and I hope you are!) then you'll get an error on:

```
import { registerSW } from "virtual:pwa-register";
```

To fix this and let us use the virtual module we need to update `tsconfig.json` to include `"vite-plugin-pwa/client"` in `compilerOptions.types`

```json
// tsconfig.json
{
  "compilerOptions": {
    ...
    "types": [
      "vite-plugin-pwa/client"
    ]
  },
}
```

Alternatively, as pointed out by [José Gonçalves](https://github.com/joego), you can add the following line to `vite-env.d.ts`:

```ts
/// <reference types="vite-plugin-pwa/client" />
```

Now you have a fully-offline app that will prompt the user to update whenever a new version is available.

You can find the code and a fully-working boilerplate [here on GitHub](https://github.com/adueck/vite-offline-pwa-boilerplate).
