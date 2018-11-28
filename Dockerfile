FROM node:latest

RUN npm install -g live-server

RUN cd www/

EXPOSE 8080

CMD ["live-server", "/data"]