# Ads.com Code-Challenge

### Clone Repo

```bash
# clone repo
$ git clone https://bitbucket.org/bodisteam/code-challenge-js.git code-challenge

# go to project path
$ cd path/to/code-challenge
```
### With Docker

```shell
# Build Container
$ docker-compose --env-file ./.devcontainer/devcontainer.env build --no-cache

# Start Container
$ docker-compose up -d
```

### No Docker?
If you do not have docker we recommend installing it, otherwise you can run webapp on your computer. You will need to install the following dependencies:

- Node 14

Run the following commands to serve on your localhost. 

```bash
# enable .env
$ cp example.env .env

# install dependencies
$ npm install

# serve api (in background) at localhost:3001
npx json-server --watch --port=3001 --quiet db.json &

# serve app at localhost:4000
$ npm run dev
```
Upon successful build, Visit on your browser: <a href="http://localhost:4000"> http://localhost:4000 </a>

## Code Challenge
- Explore the project sandbox by clicking though every actionable button.
- Navigate to `http://localhost:4000/code-challenge` and complete the todo list.
- Do a thorough project search for inline TODO comments.
- Complete at least 50 points. We encourage you to try completing as many as possible.
- Identify things that can be improved in addition to the todo list.

## Submit Changes.
- Create a new branch and commit your changes under your new branch.
- Once completed, zip the directory including `.git` directory so that we can track your changes. 
- Send zip file to your interviewer.
