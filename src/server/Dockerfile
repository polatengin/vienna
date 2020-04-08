FROM node:13.12-alpine

WORKDIR /vienna

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "production"]
