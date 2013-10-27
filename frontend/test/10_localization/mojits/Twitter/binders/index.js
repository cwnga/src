/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('TwitterBinderIndex', function(Y, NAME) {

    /**
     * The TwitterBinderIndex module.
     *
     * @module TwitterBinderIndex
     */

    /**
     * Constructor for the TwitterBinderIndex class.
     *
     * @class TwitterBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },
        bind: function (node) {
            var me = this,
            mp = this.mojitProxy;
            this.node = node;
            Y.on("domready", function () {
                Y.log("Twitter: bind ");
                // get elements
                var tweetsList = Y.one("#twitter").all('li');
                Y.Array.each(tweetsList._nodes, function (item, index, array) {
                    Y.log(item);
                    var textNode = Y.one(item).one('span');
                    textNode.setContent(textNode.getHTML().replace(/(http\S+)/i, '<a href="$1" target="_blank">$1</a>')
                    .replace(/(@)([a-z0-9_\-]+)/i, '<a href="http://twitter.com/$2" target="_blank">$1$2</a>')
                    .replace(/(#)(\S+)/ig, '<a href="http://twitter.com/search' + '?q=%23$2" target="_blank">$1$2</a>'));

                });
            });
            refreshMojit = function(evt) {
                var tgt = evt.target;
                evt.halt();
                mp.invoke('index', function(err, markup) {
                    if (me) {
                        me.innerHTML = markup;
                    }
                });
            };
            // Refresh the content when user clicks refresh button.
            Y.one("#twitter").delegate('click', refreshMojit, 'a.refresh');
        }
    };
}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});


