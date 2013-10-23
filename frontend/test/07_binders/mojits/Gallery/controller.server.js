YUI.add('Gallery', function (Y, NAME) {

  Y.namespace('mojito.controllers')[NAME] = {

    index: function (ac) {
      var view_type = "yui", tablePath = "store://owgYr7PT7CWIOWMaWs9Stb", title = "YUI Gallery Pushes";

      ac.models.get('GalleryModelYQL').getData({}, tablePath, function (data) {
        // add mojit specific css
        ac.assets.addCss('./index.css');

        // populate youtube template
        ac.done({
          title: title,
          results: data
        });
      });
    }
  };
}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon']});
