FROM node:20-alpine AS build

RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    nasm \
    build-base \
    pkgconfig \
    zlib-dev \
    jpeg-dev

WORKDIR /app
COPY package*.json ./

RUN npm i

COPY . .

ARG TARGET_ENV=dev
RUN if [ "$TARGET_ENV" = "main" ]; then \
        npm run build; \
    else \
        npm run build; \
    fi


FROM nginx:1.26.2-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.prod.conf /etc/nginx/nginx.prod.conf
COPY nginx.dev.conf /etc/nginx/nginx.dev.conf

ARG TARGET_ENV=dev
RUN if [ "$TARGET_ENV" = "main" ]; then \
        cp /etc/nginx/nginx.prod.conf /etc/nginx/nginx.conf; \
    else \
        cp /etc/nginx/nginx.dev.conf /etc/nginx/nginx.conf; \
    fi

EXPOSE 8080
EXPOSE 8443

CMD ["nginx", "-g", "daemon off;"]