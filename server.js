
//import config from './webpack.prod.js';
//const config = require('./webpack.prod.js');
var express = require('express')
const app = express();
var path = require('path')
const webpack = require('webpack')
const port = 8080;

// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.get('/', function (req, res) {
//   res.send("Hello World!");
// });

app.use(express.static('public'))


app.listen(port, function (error) {
  if(error) {
      console.log(error);
  } else {
      console.log("server listening on port "+port)
  }
});

  // const webpackDevMiddleware = require('webpack-dev-middleware')
  // const webpackHotMiddleware = require('webpack-hot-middleware')
  // const config = require('./webpack.dev.js')
  //const compiler = webpack(config)
  // app.use(webpackHotMiddleware(compiler));
  // app.use(webpackDevMiddleware(compiler, {
  //   noInfo: true,
  //   publicPath: config.output.publicPath
  // }))

//app.use(express.static(path.join(__dirname, "public")));
app.use( express.static('./src/apps/demo'));
app.get('/', function (req, res) {
  res.sendFile(__dirname+'.public/index.html');
});
// 