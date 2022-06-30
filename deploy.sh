git fetch
git stash
git pull --ff
docker build -t norman_status .
docker stop norman_status
docker rm norman_status
docker run -d --restart unless-stopped -it --name norman_status norman_status
