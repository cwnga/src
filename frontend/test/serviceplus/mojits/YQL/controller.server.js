/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('YQL', function(Y, NAME) {

/**
 * The YQL module.
 *
 * @module YQL
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('YQLModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    data: JSON.stringify(data)
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'YQLModelFoo']});
