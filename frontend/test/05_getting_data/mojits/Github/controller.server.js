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
        var model = ac.models.get('StatsModelYQL');
        Y.log(model);
        model.getData({}, function(data){
            Y.log("githubmojit -index - model.getData:");
            Y.log(data);
            ac.assets.addCss('./index.css');
            ac.done({
                title: "YUI GitHub Stats",
                watchers: data.watchers,
                forks: data.forks
            });
        });


    }
  };
}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-params-addon','mojito-models-addon','GithubModelFoo']});
