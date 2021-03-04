FROM node:alpine
COPY ./server /app
EXPOSE 3000
WORKDIR /app
RUN npm i json-server
CMD npx json-server --watch ./data.json --host 0.0.0.0

