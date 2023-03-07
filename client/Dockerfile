FROM node:16.14.0-alpine

WORKDIR /client

COPY . /client/
RUN npm install

EXPOSE 3000  

CMD ["npm", "start"]
