FROM node:14.17.6
WORKDIR $HOME
COPY package.json yarn.lock $HOME
RUN cd $HOME \
    && yarn install --pure-lockfile
COPY . $HOME
EXPOSE 3000
CMD [ "yarn", "start" ]




