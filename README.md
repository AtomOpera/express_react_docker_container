## To run this project execute following commands in order

```javascript
cd server / cd client
yarn / yarn install
yarn dev / yarn start
```

Runs the app in the development mode.<br />
Open server [http://localhost:5000](http://localhost:5000) to view it in the browser.
Open client [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker commands

--name and --build are -name and -build in Mac/Linux ?

docker build -t server_img .
docker build -t client_img .

use “docker images" command to see images in the local system

docker run -itd --rm --name server_container -p 5000:5000 server_img
docker run -itd --rm --name client_container -p 5173:5173 client_img

to stop container:
docker container stop server_container
docker container stop client_container

# Docker compose

docker-compose up --build