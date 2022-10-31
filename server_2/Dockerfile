FROM node:12

WORKDIR /app

COPY server_2/package*.json ./

RUN npm install

COPY server_2/. .

EXPOSE 27017

CMD ["npm", "run", "dev"]