var fs = require('fs');
var path = require('path');
var express  = require('express');
const router = express.Router();
const controllerSuffix = "-controller.js";

var applyAPIDirectory = function(app, prefix, rootDir){
  var files = fs.readdirSync(path.join(__dirname, "../"+rootDir) );

  if (files == null){
    return;
  }

  console.log("");
  console.log("Initialising API directory '" + prefix + "' ...");
  for(var i=0; i<files.length; i++)
  {
    if(files[i].includes(controllerSuffix)){
      var requireName = "../" + rootDir + files[i].replace(".js", "");
      var apiName = "/"+files[i].replace(controllerSuffix, "");
      require(requireName)(apiName, router);

      console.log(" - "+prefix+apiName + " from file " + files[i]);
    }

    app.use(prefix, router);
  }
}
module.exports.applyAPIDirectory = applyAPIDirectory;
