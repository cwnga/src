/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('PageLayout', function(Y, NAME) {

/**
 * The PageLayout module.
 *
 * @module PageLayout
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
            ac.models.get('PageLayoutModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');

                ac.composite.done({
                    title: "Trib - YUI/Mojito Developer Dashboard"
                });

            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'PageLayoutModelFoo', 'mojito-composite-addon']});
