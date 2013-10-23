src
==============================================================================
set past
env:
mojito@0.7.5
mojito-cli@0.1.2
//registry.npmjs.org/nodemon/-/nodemon-0.7.10.tgz
==============================================================================
dir:
frontend/test/01_mojito_cli_basics/

creating applications and mojits
testing applications and mojits
code sanitization
running applications
specifying a context (runtime environment) to run an applications

##############################################################################

frontend/test/02_mojits/
mojit definitions and instances
mojit MVC
the ActionContext object and the `ActionContext` addons
templates


##############################################################################
frontend/test/03_frame_mojit
frame:
    "child" : {
                "type" : "Github"
              }

css/javascript
2 ways to add
1,application.json
    "specs": {
      "tribframe": {
        "type": "HTMLFrameMojit",
        "config": {
          "deploy": true,
          "title": "Trib - YUI/Mojito Developer Dashboard",
          "child": {
            "type": "Github"
          },
          "assets": {
            "top": {
              "css": ["/static/03_frame_mojit/assets/trib.css"]
            }
          }
        }
      }
    }
2,
ac.assets.addCss
frontend/test/03_frame_mojit/mojits/Github/controller.server.js
     ac.assets.addCss('/static/03_frame_mojit/assets/custom.css','top');

##############################################################################
frontend/test/04_composite_mojits/
use: "type": "HTMLFrameMojit"
      "tribframe": {
        "type": "HTMLFrameMojit",   ///MOJITO keywork, render can not control, by sorting
        "config": {
          "deploy": true,
          "title": "Trib - YUI/Mojito Developer Dashboard",
          "child": {
            "type": "PageLayout",   ///custom use:  mojito create mojit PageLayout
            "config": {
              "children": {
                "header": {
                  "type": "Header"
                },
                "body": {
                  "type": "Body",
                  "config": {
                    "children": {
                      "github": {
                        "type":"Github"
                      }
                    }
                  }
                },
                "footer": {
                  "type": "Footer"
                }
              }
            }
        },
##############################################################################
frontend/test/05_getting_data/
using
Y.YQL,
mojito create mojit Twitter
to get data


#############################################################################
frontend/test/serviceplus
add Search, YQL


#############################################################################
06
require
"optionalDependencies": {
      "simple-twitter": "~1.0.0",
         "yahoo-arrow": "~0.0.77",
            "phantomjs": ">=1.8.0"
        },

in test, require
{ requires: [ 'mojito-test', ''mojito-your-mojits' ] }



#############################################################################
07
binder: client run mojito





==============================================================================
mac ::
mojito-cli@0.1.2 ../../../../node_modules/mojito-cli
├── mojito-cli-start@0.0.2
├── nopt@2.1.2 (abbrev@1.0.4)
├── npmlog@0.0.2 (ansi@0.1.2)
├── mojito-cli-create@0.0.6 (which@1.0.5, through@2.3.4, mkdirp@0.3.5, scanfs@0.1.1)
├── mojito-cli-build@0.0.1 (mkdirp@0.3.5, wrench@1.4.4, rimraf@2.1.4)
├── mojito-cli-jslint@0.0.3 (mkdirp@0.3.5, scanfs@0.1.1, jslint@0.1.11, rimraf@2.1.4)
├── mojito-cli-test@0.0.4 (mkdirp@0.3.5, yuitest@0.7.9, yuitest-coverage@0.0.6, rimraf@2.1.4, yui@3.10.3)
└── mojito-cli-doc@0.0.2 (mkdirp@0.3.5, rimraf@2.1.4, yuidocjs@0.3.45)

