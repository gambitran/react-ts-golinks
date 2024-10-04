FROM node:20.17.0-alpine3.20 AS build

EXPOSE 8080

WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .

RUN corepack enable
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.26.2-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
