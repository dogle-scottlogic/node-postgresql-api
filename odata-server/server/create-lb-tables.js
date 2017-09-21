'use strict';
var server = require('./server');
var ds = server.dataSources.db;
var lbTables = ['films', 'ACL'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  ds.disconnect();
});
