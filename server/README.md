## To run this project execute following commands in order

```javascript
yarn
yarn dev
or
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker commands

docker build -t express_img .

use “docker images" command to see images in the local system

docker run -itd --rm --name express_container -p 5000:5000 express_img

to stop container:

docker container stop express_container


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# cra-template-es6

This is the official es6 template for [create-express-app](). <br>

For more information, please refer to:

- [Getting Started](https://github.com/getspooky/create-express-app#Getting-Started) How to create a new app.
- [Contributing](https://github.com/getspooky/create-express-app/blob/master/CONTRIBUTING.md) We are still working on refining it and contributions are welcome!