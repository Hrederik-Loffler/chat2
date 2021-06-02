#!/usr/bin/make

include .env

docker_bin= $(shell command -v docker 2> /dev/null)
docker_compose_bin= $(shell command -v docker-compose 2> /dev/null)


build:
	$(docker_compose_bin) -f docker-compose.yml build

up: ## Start all containers (in background)
	$(docker_compose_bin) -f docker-compose.yml up --no-recreate -d

down: ## Stop all started for development containers
	$(docker_compose_bin) -f docker-compose.yml down

restart: down up

init: ## Start shell php74 application container
	$(docker_compose_bin) -f docker-compose.yml exec --user $(CURRENT_USER_ID) "laravel-react-fpm" composer install
	$(docker_compose_bin) -f docker-compose.yml exec --user $(CURRENT_USER_ID) "laravel-react-fpm" php artisan migrate


shell-php:
	$(docker_compose_bin) -f docker-compose.yml exec --user $(CURRENT_USER_ID) "laravel-react-fpm" bash

shell-php-root:
	$(docker_compose_bin) -f docker-compose.yml exec --user="root" "laravel-react-fpm" bash

npm-install:
	$(docker_compose_bin) -f docker-compose.yml run --rm --user="1000" "laravel-react-node" npm install

npm-build:
	$(docker_compose_bin) -f docker-compose.yml run --rm --user="1000" "laravel-react-node" npm run dev

npm-watch:
	$(docker_compose_bin) -f docker-compose.yml run --rm --user="1000" "laravel-react-node" npm run watch

node-shell:
	$(docker_compose_bin) -f docker-compose.yml run --rm --user="1000" "laravel-react-node" bash

node-shell-demon:
	$(docker_compose_bin) -f docker-compose.yml run --rm -p 3000:3000 --user="1000" "laravel-react-node" bash

node-shell-root:
	$(docker_compose_bin) -f docker-compose.yml run --rm --user="root" -p 6001:6001 "laravel-react-node" bash

laravel-server:
	$(docker_compose_bin) -f docker-compose.yml run --rm -p 6001:6001 "laravel-react-node" ./node_modules/laravel-echo-server/bin/server.js start

