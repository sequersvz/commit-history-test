FROM node:16.14.0-alpine

WORKDIR /server

COPY . /server/
RUN npm install

EXPOSE 4000  

CMD ["npm", "start"]
