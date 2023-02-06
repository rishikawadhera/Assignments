var expressExtension = require('express-integrator-extension');
var functions = require('./functions');

var systemToken = '4db33873b7ec47b58cdde694943ee94d' // Set this value to the systemToken of the stack created in integrator.io
var options = {
  diy: functions,
  // connectors: { _connectorId: functions }, // for connectors
  systemToken: systemToken
};

expressExtension.createServer(options, function (err) {
   if(err)
   console.log(err)
   
});