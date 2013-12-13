var io      = require('socket.io').listen(80)
  , moment  = require('moment');

var triggered = false;

io.sockets.on('connection', function (socket) {

  socket.on('trigger', function (data) {

    var triggerMoment = moment().add('seconds', 5);
    
    socket.broadcast.emit('trigger', { when: triggerMoment });
  
  });
});