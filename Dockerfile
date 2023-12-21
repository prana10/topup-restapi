FROM node:20.10-alpine

WORKDIR /usr/src/app

# copy package json && package lock json
# bisa dengan cara ini 
# "COPY package*.json ./""
COPY package.json ./ 
COPY package-lock.json ./

# copy semua file ke dalam image
COPY . .

# COPY app.yaml for env variables
COPY app.yaml ./

RUN npm run build

EXPOSE 3030

CMD ["npm", "run", "start:prod"]