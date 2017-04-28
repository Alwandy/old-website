var MongoClient = require('mongodb').MongoClient;
var globalConfig = require('./config');
var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect(globalConfig.dbConUrl, function( err, db ) {
      _db = db;
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
