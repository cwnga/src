YUI.add('Gallery', function (Y, NAME) {

  Y.namespace('mojito.controllers')[NAME] = {
index: function (ac) {
  var view_type, tablePath, title;
      view_type = ac.params.getFromRoute('view_type') || "yui";

  if (view_type === "yui") {
    tablePath = ac.config.getDefinition('yqlTable', 'notfound');
    title = ac.config.getDefinition('yuititle', 'notitle');
  } else if (view_type === "mojito") {
    tablePath = ac.config.getDefinition('yqlTable', 'notfound');
    title = ac.config.getDefinition('mojitotitle', 'notitle');
  }
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

///    index: function (ac) {
///      var view_type = "yui", tablePath = "store://owgYr7PT7CWIOWMaWs9Stb", title = "YUI Gallery Pushes";
///
///      ac.models.get('GalleryModelYQL').getData({}, tablePath, function (data) {
///        // add mojit specific css
///        ac.assets.addCss('./index.css');
///
///        // populate youtube template
///        ac.done({
///          title: title,
///          results: data
///        });
///      });
///    }
  };
}, '0.0.1', {requires: ['mojito-params-addon', 'mojito-config-addon', 'mojito', 'mojito-assets-addon', 'mojito-models-addon']});

