YUI.add('SearchModule', function(Y, NAME) {

  Y.namespace('mojito.models')[NAME] = {

    init: function(config) {
         this.config = config;
    },
    getData: function(callback) {
      var uri = "http://tw.serviceplus.yahoo.com";
          params = { };
      Y.mojito.lib.REST.GET(uri, params,null,function(err, response) {
        if (err) {
          callback(err);

        }
//console.log(response._resp.responseText);
        callback(null, response._resp.responseText);
      });
    }
  };
}, '0.0.1', {requires: ['mojito-rest-lib']});

