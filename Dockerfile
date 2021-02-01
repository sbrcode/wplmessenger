# pull official base image
FROM node:12.18.2

# set working directory
WORKDIR /wplmessenger

# add `/app/node_modules/.bin` to $PATH
ENV PATH /wplmessenger/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]
