module.exports.applyResponseHeaders = function (res){
  res.header('Access-Control-Allow-Origin', '*');
}
