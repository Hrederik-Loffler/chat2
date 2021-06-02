FROM nginx:latest

RUN mkdir /var/www/
RUN mkdir /var/www/html
RUN groupadd --gid=1000 dev && useradd -u 1000 -N -G www-data --gid=1000 -s /bin/bash -m dev

RUN chown -R www-data:www-data /var/www/html
