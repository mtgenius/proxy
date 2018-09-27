FROM node:alpine AS builder
WORKDIR /var/www
ENV REACT_APP_MTGJSON_API https://api.mtgeni.us/mtg.json
COPY package.json .
RUN npm install
COPY public public
COPY src src
RUN npm run build

FROM nginx:alpine
LABEL Author "Charles Stover <docker@charlesstover.com>"
RUN rm -rf /etc/nginx/conf.d
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /var/www/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
