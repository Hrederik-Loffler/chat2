FROM node:latest
RUN apt-get update \
&& apt-get upgrade -y

#даже если стоит в docker-compose все равно надо ставить для npm install
WORKDIR /var/www/html
RUN apt-get install -y nodejs
RUN npm install -g npm@7.10.0

RUN npm install --global pm2