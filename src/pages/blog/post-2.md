---
title: 'How to Create Custom Headers with Express and TypeScript'
pubDate: 2021-10-17
description: 'Brief explanation of how to create Custom Headers with Express and Typescript'
author: 'AnthonyLzq'
image:
  url: 'https://miro.medium.com/max/720/1*onOQ8hrfZ1aGS0ppzpDN2w.webp'
  alt: 'TS, Express and Node.js'
layout: ../../layouts/PostLayout.astro
tags: ['typescript', 'node.js', 'express']
---

# How to create Custom Headers with Express and TypeScript

![](https://miro.medium.com/max/720/1*onOQ8hrfZ1aGS0ppzpDN2w.webp)

Recently, I had to create a cloud function that will store some data in a PostgreSQL database. Once I had done everything, or at least I had finished with the minimal functionality, I had to add some kind of basic authentication for my endpoint. Nothing new, we just use a custom standard header here, "enterprise-key", that will tell me which client is performing the request.

Pretty easy, you may think, but it took me almost 5 hours of research to figure out how to achieve it. Since I want to help anyone who may have the same problem, I decided to write this article. Let’s do this!

I will assume you know a little bit about Node.js, Express, TypeScript, and so on. The first thing you need to do is to create a CustomRequest interface that will extend from the Request interface of Express, something like this:

```ts
import { Request } from 'express'

interface CustomRequest extends Request {}

export { CustomRequest }
```

So far, so good. At this point, we are able to add as many attributes as we want, but they have to be optional (using the **?** operator), for example:

By doing this, you will be able to access `myAwesomeProperty` as an attribute of the `request` object. Now you may think that the next step is to create a property called headers and define it as an object and add there our new property, `customHeader` for instance:

```ts
import { Request } from 'express'

interface CustomRequest extends Request {
  enterpriseID?: number
  headers      : {
    customHeader?: string
  }
}

export { CustomRequest }
```

If you use the code above and try to access the `customHeader` attribute from the `headers`, you will have a huge error from your compiler, something like:

```sh
No overload matches this call. (...)
Types of property 'headers' are incompatible.
Property 'customHeader' is missing in type 'IncomingHttpHeaders' but required in type '{ customHeader: string; }'.ts(2769)
```

And here we are, the point where everything started. As usual, a pretty complex and unintelligible error, but we can solve it. You may notice that the important things here are the `IncomingHttpHeaders` type and our `customHeader` property. If you check the definition of Request you will notice that it extends from `core.Request` interface which, in turn, extends from the `http.IncomingMessage` class, and this class has a property called `headers` guess what, its type is IncomingHttpHeaders(which comes from `http` module). We found it!

So now we know that the `headers` are from a certain type, but we can’t extend a type in TypeScript, right? Well, it may be true in the strict sense of the word, but there is a way to "extend" types in TypeScript (please check [this](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) for more information). The way to do this is by using **intersection**, when we intersect two or more types, we create a new type from them by using the **&** operator. So our next step will be importing `IncomingHttpHeaders` from `http` and intersecting it with our custom header(s).

```ts
import { IncomingHttpHeaders } from 'http'
import { Request } from 'express'

interface CustomRequest extends Request {
  myAwesomeProperty?: number
  headers           : IncomingHttpHeaders & {
    customHeader?: string
  }
}

export { CustomRequest }
```

Are we done? Not really. If you leave the article here, you will probably face the same error I had — whenever I tried to access my `customHeader`, I got undefined, for no apparent reason at all. Without any explanation, you may not be able to access your new custom header. But there is a solution! Just change the `customHeader` attribute to snake case it would be: `custom-header` or `Custom-Header` and there you go, now by using brackets (`req.headers['custom-header']`) you will be able to access your own headers.

Why do we have to do this? Why does Express doesn’t seem to be able to access our custom header when it is using camel case? I have no idea, but if you do, feel free to comment here why and we can all benefit from your answer.
