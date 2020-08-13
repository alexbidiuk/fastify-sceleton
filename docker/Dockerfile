FROM node:12-stretch

WORKDIR /opt/bets_management_be
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
RUN  chmod -R 777 /opt/bets_management_be/src
RUN rm -r /opt/bets_management_be/src
EXPOSE 4010

CMD [ "node", "./dist/main.js" ]
