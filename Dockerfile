FROM node:14.13.1-alpine

RUN mkdir -p /mdcim_react
WORKDIR /mdcim_react

ENV PATH /mdcim_react/node_modules/.bin:$PATH

COPY package.json /mdcim_react/package.json

EXPOSE 3000
# RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN npm install 

ENTRYPOINT ["npm", "start"]