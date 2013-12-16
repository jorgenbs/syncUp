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
  it("should not trigger callback if specified", function () {

    runs(function () {
      this.triggered = false;
      var self = this;
      syncup.sync('localhost:8080', false, function () {
        self.triggered = true;
      });
    });

    waits(500);

    runs(function () {
      expect(this.triggered).toBe(false);
    });

  });

  it("should trigger callback if specified", function () {
    runs(function () {
      this.triggered = false;
      var self = this;
      syncup.sync('localhost:8080', true, function () {
        self.triggered = true;
        console.log('triggered!');
      });
    });

    waits(1000);

    runs(function () {
      expect(this.triggered).toBe(true);
    });
  });

});
