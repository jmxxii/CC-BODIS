#!/bin/bash
cp example.env .env

npm install

npx json-server --watch --host=0.0.0.0 --port=3001 --quiet db.json &

npm run dev
