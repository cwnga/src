/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Body', function(Y, NAME) {

/**
 * The Body module.
 *
 * @module Body
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
///        index: function(ac) {
///            ac.models.get('BodyModelFoo').getData(function(err, data) {
///                if (err) {
///                    ac.error(err);
///                    return;
///                }
///                ac.assets.addCss('./index.css');
///                ac.composite.done({
///                    title: "Statistics for YUI"
///                });
///            });
///        }

index: function (ac) {
  Y.log("Body - controller.server.js index called");

  var view_type = ac.params.getFromRoute('view_type') || "yui";

  if (view_type === "yui") {
    ac.composite.done({
      title: ""
    });
  } else if (view_type === "mojito") {
    ac.composite.done({
      title: ""
    }, {"view": {"name": "mojito"}});
  }
}
    };

}, '0.0.1', {requires: ['mojito-params-addon', 'mojito-config-addon','mojito', 'mojito-assets-addon', 'mojito-models-addon', 'BodyModelFoo','mojito-composite-addon']});
