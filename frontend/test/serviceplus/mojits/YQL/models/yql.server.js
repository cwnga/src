/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('YQLModel', function(Y, NAME) {

    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        getData: function(callback) {

            Y.YQL('select * from html where url="http://tw.serviceplus.yahoo.com"', function(r){callback(null,r);});
        }

    };

}, '0.0.1', {requires: ['yql']});
