# Base Image
FROM node:16-alpine

# Set Working Directory
WORKDIR /usr/src/app

# Copy Requirements & Download
COPY package.json ./
RUN apk add --no-cache git openssh
RUN apk add g++ make py3-pip

RUN yarn config set network-timeout 600000 -g
RUN yarn config delete https-proxy
RUN yarn config delete proxy
RUN yarn install

# Copy Source Files
COPY tsconfig.json ./
COPY index.ts ./
COPY .env ./
COPY src ./src
COPY dist ./dist

# List current Files
RUN ls -a

# Convert Files to JS
ENV NODE_OPTIONS=--max_old_space_size=128
# RUN yarn build

# Create Entry Point
CMD [ "node", "./dist/index.js" ]
