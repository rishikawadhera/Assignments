var expressExtension = require('express-integrator-extension');
var functions = require('./functions');

var systemToken = `${process.env.SYSTEM_TOKEN}`
var options = {
  diy: functions,
  // connectors: { _connectorId: functions }, // for connectors
  systemToken: systemToken
};

expressExtension.createServer(options, function (err) {
   if(err)
   console.log(err)
   
});