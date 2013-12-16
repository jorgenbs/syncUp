(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'socket.io'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('socket.io-client'));
    } else {
        // Browser globals
        factory(root, root.io);
    }
}(this, function (exports, io) {

  exports.sync = function(socketUrl, trigger, callback) {

    var socket = io.connect(socketUrl);

    socket.on('connect', function () {

      socket.on('trigger', function (data) {
        var when = data.when
          , now = new Date();
        var interval = new Date(when).getTime() - now.getTime();

        setTimeout(callback, interval);
      });

      if (trigger) {
        socket.emit('trigger', {n:'n'});
      }
    });
  };
})
);