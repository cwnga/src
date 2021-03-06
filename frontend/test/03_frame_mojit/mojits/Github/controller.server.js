///<   /*jslint anon:true, sloppy:true, nomen:true*/
///<   YUI.add('Github', function(Y, NAME) {
///<
///<   /**
///<    * The Github module.
///<    *
///<    * @module Github
///<    */
///<
///<       /**
///<        * Constructor for the Controller class.
///<        *
///<        * @class Controller
///<        * @constructor
///<        */
///<       Y.namespace('mojito.controllers')[NAME] = {
///<
///<           /**
///<            * Method corresponding to the 'index' action.
///<            *
///<            * @param ac {Object} The ActionContext that provides access
///<            *        to the Mojito API.
///<            */
///<           index: function(ac) {
///<               ac.models.get('GithubModelFoo').getData(function(err, data) {
///<                   if (err) {
///<                       ac.error(err);
///<                       return;
///<                   }
///<                   ac.assets.addCss('./index.css');
///<                   ac.done({
///<                       title: ac.config.get('title'),
///<                       github: data
///<                   });
///<               });
///<           }
///<
///<       };
///<
///<   }, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'GithubModelFoo','mojito-config-addon']});


YUI.add('Github', function(Y, NAME) {

  Y.namespace('mojito.controllers')[NAME] = {

    index: function(ac) {

      var model = ac.models.get('GithubModelFoo');
      Y.log(model);
      model.getData(function(err, data){
          Y.log("Github -index - model.getData:");
          if (err) {
              ac.error(err);
              return;
          }
          Y.log(data);
          var view = ac.params.getFromUrl('view') || 'index';
          Y.log(view);
          if(view =='custom') {
             ac.assets.addCss('/static/03_frame_mojit/assets/custom.css','top');
          } else if(view !='index') {
            // In case a view that doesn't exist is chosen
            view = 'index';
          }
          ac.done({
              title: "",
              github: data
          }, view);
      });
    }
  };
}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-params-addon','mojito-models-addon','GithubModelFoo']});
