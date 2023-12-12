This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 RUNNING THIS NEXTJS SMOOTHIE WEB APP IN A DOCKER CONTAINER
 - There is a docker file in this repository.
 - This file pulls a a node:slim image on which the app will be ran
 - mkdir creates a directory and
 - WORKDIR is use to define the working directory of docker
 - COPY will copy all the files and folders in our current directory to our working directory we created before
 - we use RUN ro install npm dependencies
 - then it will do npm run build to build all the package.json and scripts
 - EXPOSE to expose the app on port 3000
 - CMD specifis that npm run start command should be ran when docker container is starts running

 - To run the docker file do
   docker run -t <image-name> .
 - the . to indicate that the dockerfile is in that directory where you are


More information on ['DOcker-DOC'](https://docs.docker.com/engine/reference/builder/)





