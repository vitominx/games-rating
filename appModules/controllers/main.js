const staticFile = require("../http-utils/static-file");
const { getData, endpoints } = require("../api");
const { config, makeRatingFile } = require("../rating");

async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.games);

  await makeRatingFile(config.PATH_TO_RATING_FILE, data);

  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
