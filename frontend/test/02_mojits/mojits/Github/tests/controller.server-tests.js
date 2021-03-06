
YUI.add('Github-tests', function(Y) {

    var suite = new YUITest.TestSuite('Github-tests'),
        controller = null,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({

        name: 'Github user tests',

        setUp: function() {
            controller = Y.mojito.controllers.Github;
        },
        tearDown: function() {
            controller = null;
        },

        'test mojit': function() {
            var ac,
                modelData,
                assetsResults,
                doneResults;
            modelData = { status: "Mojito is working."};
            ac = {
                assets: {
                    addCss: function(css) {
                        assetsResults = css;
                    }
                },
                models: {
                    get: function(modelName) {
                        A.areEqual('GithubModelFoo', modelName, 'wrong model name');
                        return {
                            getData: function(cb) {

                                cb(null, modelData);
                            }
                        }
                    }
                },
                 config: {
                     get: function(name){
                         return 'hihi';
                     }
                },
                done: function(data) {
                    doneResults = data;
                }
            };

            A.isNotNull(controller);
            A.isFunction(controller.index);
            controller.index(ac);
            A.areSame('./index.css', assetsResults);
            A.isObject(doneResults);
            A.areSame('Mojito is working.', doneResults.github.status);
            //A.isObject(doneResults.data);

            //A.isTrue(doneResults.data.hasOwnProperty('x'));

            //A.areEqual('y', doneResults.data['x']);

        }

    }));

    YUITest.TestRunner.add(suite);

}, '0.0.1', {requires: ['mojito-test', 'Github']});
