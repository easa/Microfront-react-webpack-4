const path = require("path");

// function rewireMUI(config, env) {
//   config.resolve = {
//     alias: {
//       "@material-ui/core": path.join(__dirname, "./material-ui.js")
//     }
//   };
//   return config;
// }
// function externalMUI(config, env) {
//   config.externals = {
//     "@material-ui/core": '@material-ui/core'
//   };
// }
module.exports = {
  webpack: (config, env) => {
    console.log(config.plugins)
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    // config.externals = config.externals || {};
    // config.externals["@material-ui/core"] = '@material-ui/core';
    // config.externals["@ksr/pubsub"] = '@ksr/pubsub';

    // externalMUI(con fig);
    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  },
};