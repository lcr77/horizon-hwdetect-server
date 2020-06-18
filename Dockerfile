FROM mhart/alpine-node:9 AS build
WORKDIR /
ADD package-lock.json .
RUN npm install
ADD . .

FROM mhart/alpine-node:base-9
COPY --from=build / .
EXPOSE 3000
CMD ["node", "server.js"]
