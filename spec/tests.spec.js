var syncup  = require('../lib/syncup')
  , server  = require('../lib/server');

describe("loading", function () {

  it("module should be loaded as object", function () {

    expect(typeof syncup).toBe("object");

  });

  it("module have a function called sync", function() {

    expect(typeof syncup.sync).toBe("function")
  
  });
});

describe("callback", function() {

  it("should be able to specify timeout", function () {
    runs(function () {
      this.triggered = false;
      var self = this;

      syncup.sync({
        socketUrl: 'http://localhost:8080', 
        trigger: true,
        timeout: 1,
        callback: function () {
          self.triggered = true;
        }
      });
    });

    waits(1500);

    runs(function() {
      expect(this.triggered).toBe(true);
    });

  });
});

describe("callback", function() {

  it("should not trigger callback if specified", function () {

    runs(function () {

      this.triggered = false;
      var self = this;

      syncup.sync({
        socketUrl: 'localhost:8080', 
        callback: function () {
          self.triggered = true
        }
      });
    });

    waits(500);

    runs(function () {
      expect(this.triggered).toBe(false);
    });

  });
});

describe("callback", function() {

  it("should trigger callback if specified", function () {

    runs(function () {
      this.triggered = false;
      var self = this;

      syncup.sync({
        socketUrl: 'http://localhost:8080', 
        trigger: true, 
        callback: function () {
          self.triggered = true;
        }
      });
    });

    waits(6000);

    runs(function () {
      expect(this.triggered).toBe(true);
    });
  });
});

describe("callback", function() {

  it("should default to 5 seconds if timeout not specified", function() {
    runs(function () {
      this.triggered = false;
      var self = this;

      syncup.sync({
        socketUrl: 'http://localhost:8080', 
        trigger: true, 
        callback: function () {
          self.triggered = true;
        }
      });
    });

    waits(1000);

    runs(function() {
      expect(this.triggered).toBe(false);
    });
  });
});
