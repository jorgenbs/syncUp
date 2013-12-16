var io      = require('socket.io').listen(8080)
  , moment  = require('moment');

var triggered = false;

io.sockets.on('connection', function (socket) {
  console.log('connection');
  socket.on('trigger', function (data) {
    console.log('trigger');
    var triggerMoment = moment().add('seconds', data.timeout || 5);
    console.log(triggerMoment.toString());
    io.sockets.emit('trigger', { when: triggerMoment });
  });
});