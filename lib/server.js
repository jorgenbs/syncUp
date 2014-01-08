"use strict";

var io      = require('socket.io').listen(8080)
  , moment  = require('moment');

var triggered = false;

io.sockets.on('connection', function (socket) {

  socket.on('trigger', function (data) {

    var triggerMoment = moment().add('seconds', data.timeout || 5);

    io.sockets.emit('trigger', { when: triggerMoment });
  });
});