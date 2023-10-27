# Generation Architecture App

## Description
This is a simple app for gen archi project
The main goal is to be able to count the late of people to meetings.

## Stack Technique
### Front
- SvelteJS
### Back
- NodeJS
- ExpressJS
- Typescript
- Prisma
### Database
- MongoDB


## Installation

### Back

```bash
cd back-end
```
Setup the .env file
```bash
cp .env.default .env
```
#### Database
```bash
docker compose up -d mongo
```

#### Server
```bash
npm install
npm run start:dev
```

### Front
```bash
cd front-end
npm run dev
```

## Initialisation of project (if you want to start from scratch)
### Front
See this [link](https://svelte.dev/blog/the-easiest-way-to-get-started) to install SvelteJS on Project

### MongoDB
See this [link](https://www.youtube.com/watch?v=mj5MxsEiHe8&ab_channel=jemini-io) to install MongoDB x Prisma x Docker on Project

### Prisma
See this [link](https://www.prisma.io/docs/getting-started/quickstart) to install Prisma on Project

### NodeJS + ExpressJS + Typescript
See this [link](https://khalilstemmler.com/blogs/typescript/node-starter-project/) to install NodeJS + ExpressJS + Typescript on Project

### Airbnb Style Guide
See this [link](https://github.com/nielse63/eslint-airbnb-base-prettier-typescript-example) to install Airbnb Style Guide on Project

## TODO
