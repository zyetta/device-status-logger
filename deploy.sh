git fetch
git stash
git pull --ff
docker build -t device_status .
docker stop device_status
docker rm device_status
docker run -d --restart unless-stopped -it --name device_status device_status
