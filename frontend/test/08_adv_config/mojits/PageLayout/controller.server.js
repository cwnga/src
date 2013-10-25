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
///         index: function(ac) {
///             ac.models.get('PageLayoutModelFoo').getData(function(err, data) {
///                 if (err) {
///                     ac.error(err);
///                     return;
///                 }
///                 ac.assets.addCss('./index.css');
///
///                 ac.composite.done({
///                     title: "Trib - YUI/Mojito Developer Dashboard"
///                 });
///
///             });
///        }

index: function(ac) {
  Y.log("PageLayout: this log message won't show in the default context, but will show up in development.","info", NAME);
  var view_type = ac.params.getFromRoute('view_type') || "yui";
  if (view_type === "yui") {
    ac.composite.done({
      title: "Trib - YUI Developer Dashboard",
      button_text: "See Mojito Dashboard",
      other: "/mojito"
    });
  } else if (view_type === "mojito") {
    ac.composite.done({
      title: "Trib - Mojito Developer Dashboard",
      button_text: "See YUI Dashboard",
      other: "/"
    });
  }
}

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'PageLayoutModelFoo', 'mojito-composite-addon','mojito-params-addon', 'mojito-config-addon']});
