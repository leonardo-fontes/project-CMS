FROM node:latest as build-stage

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn  install
COPY . .
RUN yarn build
RUN  rm -R node_modules

FROM nginx 

COPY nginx/Nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build-stage /app/dist /usr/share/nginx/html 
CMD ["nginx", "-g", "daemon off;"]
