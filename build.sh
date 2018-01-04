#!/usr/local/bin/fish
docker stop nodeapp
docker rm nodeapp
docker build -t nodeapp .
docker run --name nodeapp -d -p 80:3000 nodeapp
sleep 1
curl http://localhost