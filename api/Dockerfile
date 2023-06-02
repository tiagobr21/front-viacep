FROM node:16

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install && npm i nodemon

EXPOSE 3080

CMD ["npm", "run", "dev"]