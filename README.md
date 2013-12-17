syncUp
=================
Run code across tabs/browsers at the same time, by the help of a socket.io server and callbacks.

There is probably minimal uses for this, and its not that robust. I created this in a quick attempt to sync Web Audio API synthesizers/drums accross tabs. 

Usage
----------------
1. Start the server (default port 8080)
`node lib/server.js` 

2. Inject the script onto the page(s) where you want to run your stuff (you need to inject socket.io-client as well).

3. Connect the syncup's to the server

        syncup({
            socketUrl: 'http://localhost:8080',
            trigger: true,
            timeout: 5,
            callback: function() {
                console.log('tab #1');
            }
        });

This snippet will tell all other syncups connected to the server to execute their callback function in 5 seconds. If `trigger` had been false or not set, nothing would have happened until another syncup connected with the `trigger` flag set to true.
