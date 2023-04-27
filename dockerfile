FROM node:14

WORKDIR /dist

COPY . /dist

RUN npm install

EXPOSE 3001

CMD ["node", "./dist/index.js"]