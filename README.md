# progress-edit

<br />

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Deployment](#deployment)
- [License](#license)
- [Demo](#demo)
- [Criteria](#criteria)
- [Collaboration](#collaboration)

<br />
<br />

## Description

Progress Edit is not only a text editor that runs in the browser, but it is also a Progressive Web App with a number of data persistence measures serving as redundancy in case one of the options is not supported by the browser, or online connectivity is lost. The app uses the `idb` package methods to get and store data to an IndexedDB database.

<br />
<br />

## User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

<br />
<br />

## Installation

⬇️

Must first initialize with the following commands:

```
...

```

<br />

Application will then run in the command-line with:

```
...
```

<br />
<br />

## Deployment

Full-stack application deployed to Heroku using the [Heroku Deployment Guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide).

[<img src="./assets/images/...png" height="80px">](https://.../)

<br />

**Employing the following technology:**

[<img src="./assets/images/...svg" height="20px">](https://www.npmjs.com/package/express)

<br />
<br />

## License

Copyright (c) David Dyer [2022]

[<img src="./assets/images/isc.svg" height="20px">](https://choosealicense.com/licenses/isc/)

<br />
<br />

## Demo

Demonstrate the app being used in the browser and then installed.
Demonstrate the app with a manifest file in the browser.
Demonstrate the app with a registered service worker in the browser.
Demonstrate the app with a IndexedDB storage named 'jate' in the browser.

[![](assets/demo/...png)](https://youtu.be/...)

<img src="./assets/demo/...png" width = "600">

<br />
<br />

## Criteria

✅

- Uses IndexedDB to create an object store and includes both GET and PUT methods
- The application works without an internet connection
- Automatically saves content inside the text editor when the DOM window is unfocused
- Bundled with webpack
- Create a service worker with workbox that Caches static assets
- The application should use babel in order to use async / await
- Application must have a generated `manifest.json` using the `WebpackPwaManifest` plug-in
- Can be installed as a Progressive Web Application

```
when opening app in editor, user presented with client-server folder structure.

commanding `npm run start` from root directory starts backend and serves client.

running app from terminal will bundle js files using webpack.

webpack plugins generate html file, service worker, and manifest file.

with next-gen js applied, app still functions in browser with no error.

when opening text editor, idb immediately creates database storage.

user enters content and clicks off dom window, content is saved with idb.

reopening app after closing, will display content retrieved from idb.

clicking install button will download app as an icon on user desktop.

loaded web app will have registered service worker using workbox.

after service worker registration, user has static assets pre-cached upon loading.

deploying to heroku has proper build scripts for webpack.
```

<br />
<br />

## Collaboration

Development efforts included much deliberation with my fellow cohort:  
**Olsen Ogouchi**

<a href= "https://github.com/Chrisolsen1993"><img src=
"https://avatars.githubusercontent.com/u/49103700?v=4" width="50px"/></a>

<br />
<br />
<br />
Let's build something!

🛠️
