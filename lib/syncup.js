//syncup(socketUrl, sec, callback)

//syncup('localhost:8080', trigger=false, function() {
//    console.log('GO')  
//})

define(['socket.io'], function (moment, io) {

  var syncup = function(socketUrl, trigger, callback) {

    var socket = io.connect(socketUrl);

    socket.on('trigger', function (data) {
      var when = data.when
        , now = new Date();
      var interval = when.getTime() - now.getTime();

      setTimeout(callback, interval);
    });

    if (trigger) {
      socket.emit('trigger');
    }
  };

  return syncup;
});