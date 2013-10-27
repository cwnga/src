YUI.add('Blog', function (Y, NAME) {

  Y.namespace('mojito.controllers')[NAME] = {

    ///> index: function (ac) {
    ///>   var view_type = "yui", feedURL = "http://www.yuiblog.com/blog/feed/", title = "YUI Blog Posts";
    ///>   ac.models.get('BlogModelYQL').getData({}, feedURL, function (data) {
    ///>     // Add mojit specific css.
    ///>     ac.assets.addCss('./index.css');
    ///>     // Populate blog template.
    ///>     ac.done({
    ///>       title: title,
    ///>       results: data
    ///>     });
    ///>   });
    ///> }
    //
    index: function (ac) {
        var view_type, feedURL, title;
        view_type = ac.params.getFromRoute('view_type') || "yui";

        if (view_type === "yui") {
            feedURL = ac.config.getDefinition('feedURL', 'notfound');
            title = ac.config.getDefinition('yuititle', 'notitle');
        } else if (view_type === "mojito") {
            feedURL = ac.config.getDefinition('feedURL', 'notfound');
            title = ac.config.getDefinition('mojitotitle', 'notitle');
        }
        ac.models.get('BlogModelYQL').getData({}, feedURL, function (data) {
            // add mojit specific css
            ac.assets.addCss('./index.css');
             ac.helpers.expose('linker');

            // populate blog template
            ac.done({
                title: title,
                results: data
            });
        });
    }
  };
}, '0.0.1', {requires: ['mojito-params-addon','mojito-config-addon', 'mojito', 'mojito-assets-addon', 'mojito-models-addon','mojito-helpers-addon']});
