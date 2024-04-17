const http = require("http");
const path = require("path");

const PORT = 3005;

const {
  mainRouteController,
  defaultRouteController,
  gameRouteController,
  voteRouteController,
} = require("./appModules/controllers");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;

    case "/game":
      gameRouteController(res);
      break;

    case "/vote":
      voteRouteController(req, res);
      break;

    default:
      defaultRouteController(res, url);
  }
});

server.listen(PORT);
