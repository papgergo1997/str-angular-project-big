FROM node:alpine
COPY . /app
EXPOSE 4000
WORKDIR /app
RUN npx ng build --prod
RUN npx ng run big-project:server:production
CMD node dist/big-project/server/main.js
