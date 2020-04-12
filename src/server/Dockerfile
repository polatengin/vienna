FROM node:13.12-alpine

WORKDIR /vienna

COPY . .

RUN npm install

#mongodb ATLAS  a bağlanmak için eklendi.
RUN npm i --save mongodb

EXPOSE 3000

CMD ["npm", "run", "production"]
