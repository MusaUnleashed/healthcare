# Healthcare

is a fullStack app that has two micro-server the client connect with server using
web socket than you have connection
##Installation
clone the app than navigate to healthcare

# first option

```bash
npm install
node server.js
```

# using docker

```bash
docker build . -t <your username>/node-web-app
docker run -p 3000(machinehost):3000(Dockerhost) -d  <your username>/node-web-app
```

## useful command if had some isue

## docker

docker container ls => list of runing container
docker stop 1545cd15f2ce(containerId)

## machine

netstat -ano | findstr :3001 (port to find)
taskkill -PID 12372 (container Id) -f

## usage

open localhost:3000 if you had in issue in port 3000 be sure to check prev command

after that you enter number (1,1000)
the server should return array sorted in reverse order
