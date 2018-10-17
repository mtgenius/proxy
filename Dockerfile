FROM node:alpine AS builder
WORKDIR /var/www
COPY package.json .
RUN npm install
COPY public public
COPY src src
RUN npm run build

FROM nginx:alpine
LABEL Author "Charles Stover <docker@charlesstover.com>"
RUN rm -rf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /var/www/docs /var/www
COPY etc/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
