# specify the node base image with your desired version node:<version>
FROM node:14
WORKDIR /atlas-discord
COPY package.json ./
# replace this with your application's default port
RUN npm install

CMD [ "node", "bot.js" ]