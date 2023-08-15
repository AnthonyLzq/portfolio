---
title: 'How to Create Global Variables in TypeScript with Node.js'
pubDate: 2021-12-12
description: 'Brief explanation of how to create Global Variables in TS with Node.js'
author: 'AnthonyLzq'
image:
  url: 'https://cdn-images-1.medium.com/max/800/1*hy4Je0qslH_8SauYd5lzmw.jpeg'
  alt: 'A girl coding.'
layout: ../../layouts/PostLayout.astro
tags: ["TypeScript", "Node.js"]
---
# How to Create Global Variables in TypeScript with Node.js

![](https://cdn-images-1.medium.com/max/800/1*hy4Je0qslH_8SauYd5lzmw.jpeg)

At this point, you may know that Node.js version 16 has removed `NodeJS.Global` in favor of `globalThis` and because of that creating global variables can be kind of tricky nowadays (check this [link](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/53669) for more info).

## How did we use to create global variables in Node.js 14 ≤?

Well, it was pretty easy, we just had to `extend` from `NodeJS.Global`.

```ts
interface CustomNodeJSGlobal extends NodeJS.Global {
  myGlobalVariable: unknown
}

export { CustomNodeJSGlobal }
```

Then we had to declare a global variable and like magic, our global variable was available anywhere.

```ts
import { CustomNodeJSGlobal } from "/direction/to/global.variables/file"

declare const global: CustomNodeJSGlobal

global.myGlobalVariable = 'Hi mom, look at me, I am global!'

console.log({ myGlobalVariable: global.myGlobalVariable })
```

## How do we create global variables in Node.js 16 ≥?

Now, we only have to declare the types, interfaces or variables in the global namespace, to achieve this we have to create a `.d.ts` file, look at this example:

```ts
declare global {
  var globalString: string
  
  interface GlobalInterface {
    value: unknown
  }

  type GlobalType = {
    value: unknown
  }
}

export {}
```

Here we are declaring a global variable, interface and type, with this, all of them will be available everywhere in our project. And yes, unfortunately, we have to use `var`, otherwise, it won’t work. So far, so good, now if we want TypeScript to recognize our global variable, interface and type, we have to create a `@types` folder and put there our `.d.ts` file.

However, this approach is mainly used to declare global variables, if you only need to declare global interfaces or types, there is even a simpler approach. Let’s suppose you want to define a custom DTO as an interface, since a DTO can be used in many places you may find useful to declare it as a global interface or type. How could you that? Well, you only need to create a d.ts file inside your `@types` folder, let’s image that your DTO represents a user as follows:

```ts
interface DtoUser {
  id: string
  lastName: string
  name: string
}
```

So you only need to create a file, let’s say `user.d.ts`, inside your `@types` folder and that’s it. Now, your DTO is available globally, but you could even improve this approach by creating a `dto` folder and putting all your DTOs there, and then, if you need it, you may create a new folder for your types or interfaces.

### Note

This simpler approach is very useful in case you do not need to import types from an external package. In case you want to import a type from an external package, you may run into some issues. For instance:

```ts
import { MqttClient } from 'mqtt'

interface Route {
  sub: (client: MqttClient) => void
  PUB_TOPIC: string
  SUB_TOPIC: string
}
```

Because I’m importing a specific type of `mqtt` package my global type `Route` will not be detected. There are two solutions to this issue. The first one is to put the `Route` interface inside `global` as follows:

```ts
import { MqttClient } from 'mqtt'

declare global {
  interface Route {
    sub: (client: MqttClient) => void
    PUB_TOPIC: string
    SUB_TOPIC: string
  }
}

export {}
```

Another approach you can use without using global:

```ts
interface Route {
  sub: (client: import('mqtt').MqttClient) => void
  PUB_TOPIC: string
  SUB_TOPIC: string
}
```

## What about initializing variables?

As I said lines above, you can declare global variables, unfortunately you can’t initialize them, why? Because those are type definition files, `.d.ts` files. That means, you only can define things there.

However, I found an approach you may find useful, let’s suppose you want to use `globalString` in some file. First, you have to initialize your global variable, I suggest you to do it in the entry point of your app (just to be organized), it will look something like:

```ts
// entryPoint.ts
global.globalString = 'Hi mom, I am global'
```

Then, you can access your global variable by using `globalString` (without global), for example:

```ts
// some/other/ts/file.ts
console.log({ globalString })
```

## Custom type folder

In case we want to have a custom location we have to add it to the `typeRoots` array in our `tsconfig.json`. Something like:

```json
{
  ...
  "compilerOptions": {
    ...
    "typeRoots": ["path/to/our/global/variables.d.ts"],
    ...
  }
}
```

In case you are using `ts-node` to run your project you have to add the files option in your `tsconfig.json` file, or follow this [guide](https://github.com/TypeStrong/ts-node#missing-types). Personally, I prefer the first option since it is simpler:

```json
{
  ...
  "ts-node": {
    "files": true
  },
  ...
}
```

That's it, your global variable, interface, and type are available everywhere!

## Warning!

Well, at this point you have been granted great power. And…

> With great power comes great responsibility.
> - Uncle Ben.

**You must avoid using global variables as much as possible**, since it can drive you to [Spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code). Remember, they are variables, they can change, so be very careful. If you don't need to use it, just don't. You may find this [qoura question](https://www.quora.com/When-is-it-a-good-idea-to-use-global-variables) useful.
