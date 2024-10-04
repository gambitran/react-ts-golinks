FROM node:20.17.0-alpine3.20 AS build

WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .

RUN corepack enable
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.26.2-alpine-slim

EXPOSE 8080

COPY ./deploy/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
