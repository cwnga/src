src
==============================================================================
set past
env:
mojito@0.7.5
mojito-cli@0.1.2
//registry.npmjs.org/nodemon/-/nodemon-0.7.10.tgz
==============================================================================
README log:
2013-11-10
add TestApp, mobile/ItemDetail
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

#############
#############################################################################
08 config

config


application.json
之前：
.  49                     "assets": {
   50                         "top": {
   51                             "css": [
   52                                 "http://yui.yahooapis.com/3.9.0/build/cssnormalize/cssnormalize-min.css",
   53                             "http://yui.yahooapis.com/gallery-2013.03.13-20-05/build/gallerycss-cssform/gallerycss-cssform-min.css",
   54                             "http://yui.yahooapis.com/3.9.0/build/cssgrids-responsive/cssgrids-responsive-min.css",
   55                             "http://yui.yahooapis.com/3.9.0/build/cssbutton/cssbutton-min.css",
   56                             "http://yui.yahooapis.com/gallery-2013.03.13-20-05/build/gallerycss-csslist/gallerycss-csslist-min.css",
   57                             "https://rawgithub.com/tilomitra/yuicss-common/master/ui.css",
   58                             "/static/07_binders/assets/trib.css"
   59                                 ]
   60                         }
   61                     }

現在，在上面先定義
    3     "settings": [ "master" ],
    4         "appPort": "8666",
    5         "staticHandling": {
    6              "appName": "trib"
    7                 },
    8         "specs": {
  "/static/07_binders/assets/trib.css"  --> "/static/trib/assets/trib.css"


set log info by evn

1 [
2 {
3 "settings": [ "environment:development" ],
4 "staticHandling": {
5 "forceUpdate": true 6 },
7 "yui":{
8 "config": {
9 "debug": true,
   10 "logLevel": "debug"
   11 }
   12 }
   13 },
   14 {
   15 "settings": [ "environment:production" ],
   16 "staticHandling": {
   17 "forceUpdate": false
   18 },
   19 "yui":{
   20 "config": {
   21 "debug": false,
   22 "logLevel": "none"
   23 }
   24 }
.  25 },
   26 {
   27 "settings": [ "master" ],
   28 "appPort": "8666",
   29 "staticHandling": {
   30 "appName": "trib"
   31 },
   32 "yui":{



 -addon
mojito-params-addon

 mojits/Gallery/definition.json
 [ Gallery Pushes",     "yuititle":"YUI Gallery Pushes",     "yqlTable":"store://owgYr7PT7CWIOWMaWs9Stb"   } ]
    tablePath = ac.config.getDefinition('yqlTable', 'notfound');

routes.jsony

  1.

[  {    "settings": [ "master" ],    "root": {      "verbs": ["get"],      "path":"/",      "call":"tribframe.index",      "params": {"view_type":"yui"}    },    "mojito_view":{      "verbs": ["get"],      "path":"/mojito",      "call":"tribframe.index",      "params": {"view_type":"mojito"}    }  }]
  2.


  view_type = ac.params.getFromRoute('view_type') || "yui";


==============================================================================
09
Handlebars, Templates, and Custom Views

in application.json
[
  ...,
  {
    "settings": [ "device:android" ],
    "selector": "android"
  },
  {
    "settings": [ "device:ipad" ],
    "selector": "ipad"
  },
  {
    "settings": [ "device:iphone" ],
    "selector": "iphone"
  }
]

2.
Handlebars function(in partent mojit)
in mojit controller
add function
ex
YUI.add('helperMojit', function(Y, NAME) {
function toLinkHelper(title, url) {
    return "<a href='" + url + "'>" + title + "</a>";
  }
  index: function(ac) {
    var data = {
    ac.helpers.expose('toLink',toLinkHelper); // use: expose to let all mojits avalibe to use it
    ac.done({ yui: data });
  }

}, '0.0.1', {requires: ['mojito', 'mojito-helpers-addon']});///< need to add mojito-helpers-addon

3. in child
controller:
ac.helpers.get();
mojito-helpers-addon///< add

view:
use {{{toLink parm1 parm2 ...}}}, ex
<div id="{{mojit_view_id}}">
  <h3>YUI Modules</h3>
  <ul>
  {{#each yui.modules}}
    <li>{{{toLink title user_guide }}}</li>
  {{/each}}
  </ul>
</div>
#####
PARTIALS:: template include
Mojito allows you to have both global (shared by all mojits) or local (available only to one mojit) partials depending on the context.
Global and local partials are used the same way in templates,
but the location of the partials is different. Data that is available to templates is also available to partials.



Handlebars expressions that other templates can include.
GLOBAL PARTIALS
{app_dir}/views/partials

local partials
LOCAL PARTIALS
{app_dir}/mojits/{mojit_name}/views/partials

apps/views/particals/ widget_heading.hb.html

in view:
 {{> partial_name}}

ex:
 {{> widget_heading}}



##############################################################################
10 10_localization(i18n)

frontend/test/10_localization/mojits/PageLayout/lang/PageLayout_en-US.js
frontend/test/10_localization/mojits/PageLayout/lang/PageLayout_zh-Hans.js

YUI.add("lang/PageLayout_zh-Hans", function (Y) {
   Y.Intl.add(
    "PageLayout",  // associated module
    "zh-Hans",    // BCP 47 language tag
    // key-value pairs for this module and language
    {
      YUITitle: "Trib - YUI 开发人员仪表板",
      MojitoTitle: "Trib - Mojito 开发人员仪表板"
    }
  );
}, "3.1.0", {requires: ['intl']});

in controller::
title: ac.intl.lang("YUITitle"),
mojito-intl-addon

#############################################################################
frontend/test/socket_server_client
node server.js

#############################################################################
mobile
add serviceplus mobile Search
v2. add inifi scroll
v3. add top search bar
v3. add loading img
v4. add loading img show/hidden




#####
add frontend/test/socket_server_mojito/



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

