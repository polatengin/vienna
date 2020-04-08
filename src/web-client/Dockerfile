FROM node:13.12-alpine as builder

RUN apt-get update

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
RUN npm install
