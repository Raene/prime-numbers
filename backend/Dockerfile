FROM node:14.16.0-alpine3.13@sha256:1a2edd86b2179d1c26b419f41ae51e9cb734ddeb279e80d03cd8b2c6bdf1e1f9 as base
RUN apk add dumb-init
WORKDIR /usr/src/app
COPY package*.json ./

ENV PORT=3000
FROM base as dependencies
# install ALL node_modules, including 'devDependencies'
RUN npm install

FROM dependencies as development
COPY . .
CMD ["npm", "run", "dev"]

FROM dependencies as test
COPY . .
CMD [ "npm", "run", "test" ]

FROM base AS production
# copy production node_modules
RUN npm ci --only=production
# copy app sources
COPY . .
CMD ["dumb-init", "node", "index.js"]