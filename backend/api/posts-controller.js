var ObjectId = require('mongodb').ObjectID;
var globalConfig = require('../config/config.js');
var db = require('../config/database').getDb();


module.exports = function(controllerName, router) {
  router.get(controllerName, (req, res) => {
    globalConfig.ApiUtils.applyResponseHeaders(res);
    db.collection('posts').find().toArray(function (err, result) {
    if (err) throw err
      for(var i = 0; i < result.length;){

        result[i].date = result[i]._id.toString().substring(0,8);
        result[i].date = new Date( parseInt( result[i].date, 16 ) * 1000 );
        i++;
      }
    res.json(result);
  });
});

  router.get(controllerName + '/:id', (req, res) => {
    globalConfig.ApiUtils.applyResponseHeaders(res);
    var query = {'_id': ObjectId(req.params.id)};
  db.collection('posts').findOne(query, function (err, result) {
    if (err) throw err
      result.date = result._id.toString().substring(0,8);
      result.date = new Date( parseInt( result.date, 16 ) * 1000 );
    res.json(result);
  });
});


  return router;
};
