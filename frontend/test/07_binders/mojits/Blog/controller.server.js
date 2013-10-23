YUI.add('Blog', function (Y, NAME) {

  Y.namespace('mojito.controllers')[NAME] = {

    index: function (ac) {
      var view_type = "yui", feedURL = "http://www.yuiblog.com/blog/feed/", title = "YUI Blog Posts";
      ac.models.get('BlogModelYQL').getData({}, feedURL, function (data) {

        // Add mojit specific css.
        ac.assets.addCss('./index.css');

        // Populate blog template.
        ac.done({
          title: title,
          results: data
        });
      });
    }
  };
}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon']});
