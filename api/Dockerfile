FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm i

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]