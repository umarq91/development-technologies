FROM node

COPY package*.json ./
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]