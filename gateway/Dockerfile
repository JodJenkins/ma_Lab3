FROM node:12

WORKDIR /app

COPY gateway/package*.json ./

RUN npm install

COPY gateway/. .

EXPOSE 3000

CMD ["npm", "run", "dev"]