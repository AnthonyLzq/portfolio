---
title: 'Simba.js, the easiest way to start your TS APIs'
pubDate: 2023-08-07
description: 'A presentation of my library/framework to build TypeScript APIs'
author: 'AnthonyLzq'
layout: ../../layouts/PostLayout.astro
tags: ["Simba.js", "TypeScript", "Node.js", "API", "Express", "Fastify", "GraphQL", "Prisma"]
---

# Simba.js, the easiest way to start your TS APIs

This is the first part of a series of posts and I want to talk about general concepts Simba.js, use cases, possibilities, caveats, recommendations and son on.

## Another JS library/framework?

Short answer, yes. Long answer, well…

![My framework/library logo](https://cdn-images-1.medium.com/max/2000/1*EDKL-Z_sIMRIPQUbQLOXlA.png)

If you are something like me, you might found yourself really annoyed whenever you wanted to start a new JS/TS API. Most of the time you had to configure yourself the same stuff over and over again, creating a tsconfig.json, .eslintrc, LICENSE, jest.config.js/ts, Dockerfile, and so many more depending on how complex your project will be.

Back in 2021 when I just started programming (I had 1 year of experience or so) I decided I did not want to do that again, so I created a cli tool to help me create all the configs files and avoid all the stress of creating them manually over and over again. That tool was very useful, on those days I did not have to create anything manually, but it was not enough for me, why? Because when you create an API (at least a RESTFul API) most of the stuff you do is usually the same.

You have to config your server, then your database, then add some stuff in the middle to handle you business logic — let’s call it “services” — and finally add some routes — “controllers” — to expose you business logic through some endpoints. Once you get to that point, you probably need to add some kind of validation between the request you receive and the logic you have in your controllers, so you may end up adding some schemas to validate if the request some user sent was correct, and so on.

As you can see, creating an JS/TS RESTFul API is usually a very repetitive process. So I started working on create something to avoid this process.

I got inspiration from many places, in that time we used to built SPAs with [CRA](https://create-react-app.dev/), and it was kind of fun, CRA gave you most of the tools you needed to start building your own app, but that was for the frontend, what about the backend?
I remember we did not have something like CRA, but we had very popular complete frameworks such as [NestJS](https://nestjs.com/) or [SailsJS](https://sailsjs.com/) and on the other hand we had very unopinionated (or not) popular frameworks such as [Express](https://expressjs.com/), [koa](https://koajs.com/) or [Fastify](https://fastify.dev/) that did not provide you at least an skeleton or basic config to begin with, like CRA used to provide.
According to what I remember, there was no middle point, yo have to go fully with Nest, or go by your own with plain Express or Fastify.

That’s how the idea of Simba.js (I did not have the name, yet) came to my mind. I wanted a tool that gives me a start point, so I have to write some queries, controllers, or services by hand, but I just had to follow the skeleton to make it work. I needed something that did not feel like magic (sorry Nest) where you just have to import something and that’s it, but also I did not want to reinvent the wheel.

I was ready, I built a cli tool that allowed me, with some few key strokes, to create a little boilerplate with all the configuration done and also a fully working RESTFul API, but the name was missing, and then the idea came to my mind. I named my framework/library after my cat, Simba, who is the laziest creature I have ever met and so I am, why? Because I do not want to create a RESTFul API from scratch again.

![Simba, my cat.](https://cdn-images-1.medium.com/max/2560/1*_eHdNAR-TkJ6yvuvzOfh-w.jpeg)

The goal of Simba.js is to standardize the way we create RESTFul APIs, well in fact that **was** the goal, nowadays I also want to standardize the way we built GraphQL APIs too. So let’s say that **Simba.js aims to become the standard way to build TS APIs**.

Of course, Simba.js is heavily opinionated, I chose the backend frameworks I liked: (and also very popular ones) Express and Fastify, and also the tools I liked, at the time those were Joi and Mongoose (currently not supported) and some others. I also chose the [eslint](https://eslint.org/) and [prettier](https://prettier.io/) config I liked, the test framework, and so on.

I chose these tools based on my own experience, because I thought they work very well together and was kind of easy to combine them in a reusable way. I also think this is a good point to start, once Simba.js provides you the boilerplate, it’s pretty easy to manipulate it and escalate the application based on your needs. Besides, Simba.js provides you many tools to allow you build your own API, you can choose:

 1. between Express and Fastify,

 2. a MongoDB or a classic Relational DB,

 3. a REST API or a GraphQL one,

 4. to have a GitHub Action of linting and testing,

 5. which license you want to use, etc.

And do not forget you will no longer have to worry about those annoying configuration files everyone hates.

Sounds good, right? Why don’t you give it a try? Here is the [repo](https://github.com/AnthonyLzq/Simba.js) (if you want, leave a star there!), and also the[ npm package](https://www.npmjs.com/package/@anthonylzq/simba.js). I hope you find it useful.

That’s it for now. Happy coding!
