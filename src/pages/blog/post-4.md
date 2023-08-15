---
title: 'How to dump an external PostgreSQL database using Docker'
pubDate: 2023-03-17
description: 'Brief explanation of how to dump an external PostgreSQL database using Docker'
author: 'AnthonyLzq'
# image:
#   url: 'https://miro.medium.com/max/4800/1*3Xpa877YwMG7Qsqio3KSfQ.webp'
#   alt: 'Deploying a Node.js App to OCI'
layout: ../../layouts/PostLayout.astro
tags: ["PostgreSQL", "Docker", "docker-compose"]
---

# How to dump an external PostgreSQL database using Docker

Today I run into a kind of tricky issue. I had to create a backup from an external PostgreSQL database, but I did not want to install PostgreSQL into my personal computer. I usually try to avoid installing databases for different reasons I will not explain here. What I prefer to do is to create the databases I need using Docker.

First of all, I will assume that you have basic knowledge of Docker, Docker compose and PostgreSQL. Also, that you have already installed Docker and Docker compose. Besides, this tutorial is only valid for, at least for now, for Linux. I’m not a Windows/Mac user, so I don’t know if the commands would be the same.

## DB Creation

Let’s begin, the first thing you have to do is to create a folder where you are going to save your DB. Go to that folder and create a `docker-compose.yml` file, there put the following:

```docker-compose
services:
  postgres:
    image: postgres:14
    restart: always # Change this in case you don't want to restart the image in every system restart
    ports:
      - 5432:5432
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - ./db:/var/lib/postgresql/data
```

This is a minimal setup for a PostgreSQL using Docker compose. I will not go deep into any details, but you are free to modify that file according to your needs. Now, in your current folder create a `.env` file, there put the following:

```bash
DB_NAME = postgres
DB_USER = your_user
DB_PASSWORD = some_secure_password
```

This environment variables are going to be used in the `docker-compose.yml` file to setup our database. Once you have those files created, you can run your database by using:

```bash
docker-compose --env-file .env up
```

And that’s it, you have your database up and running.

## Dumping an external DB

Now that you have your DB up and running, you can dump an external DB to your local DB using your dockerized database. You can achieve this with the `postgres pg_dump` command, but since you don’t have a local instance of PostgreSQL installed, your are not going to be able to do that. However, you can do it using `docker-compose` as follows:

```bash
docker-compose --env-file .env.local exec postgres pg_dump
```

Obviously, that’s not it, now we have to pass some arguments to this command, like so:

```bash
docker-compose --env-file .env exec postgres pg_dump "your_external_db" \
 --host "your_external_db_host" \
 --port "your_external_db_port" \
 --username "your_external_username" \
 --verbose \
 --format=c \
 --blobs \
 --section=pre-data \
 --section=data \
 --section=post-data \
 --schema "your_external_schema"
```

Finally, you have to save the output of the above command in a local file, and with that you can restore the external database into your local one. For that you can do:

```bash
docker-compose --env-file .env exec postgres pg_dump "your_external_db" \
 --host "your_external_db_host" \
 --port "your_external_db_port" \
 --username "your_external_username" \
 --verbose \
 --format=c \
 --blobs \
 --section=pre-data \
 --section=data \
 --section=post-data \
 --schema "your_external_schema" > your_external_schema.backup
```

And that’s it, you are ready to restore your external DB. I prefer to do that using a GUI, in my case I use [DBeaver](https://dbeaver.io/), so to restore your DB using DBeaver you only have to create the schema, then right click in the schema you just created, go to Tools and Restore. After that a pop up window will be opened, there just search for your `.backup` file, click on Start and DBeaver will restore your DB. After a couple of seconds you should see your restored DB there!

---

If you have free time, take a look at my backend framework, [Simba.js](https://www.npmjs.com/package/@anthonylzq/simba.js). It is something like [cra](https://create-react-app.dev/), but for backend development. It uses PostgreSQL, MongoDB, Express, Fastify, TypeScript and more. And with a simple command, you will have a server running with some endpoints you may find useful.

Happy coding!