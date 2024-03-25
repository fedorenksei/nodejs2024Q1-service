# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i
CMD ["npx", "nest", "start"]
EXPOSE 4000