YUI.add('PageLayout', function(Y, NAME) {

  // Handlerbars helper for creating links
  function createLink(title, url, path, css) {
    return "<a href='" + url + path + "'" + " class='" + css + "'>" + title + "</a>";
  }
  Y.namespace('mojito.controllers')[NAME] = {

 ///>   index: function(ac) {
 ///>     // Register helper for use in template
 ///>     ac.helpers.expose('linker', createLink);

 ///>     var view_type = ac.params.getFromRoute('view_type') || "yui";
 ///>     if (view_type === "yui") {
 ///>       ac.composite.done({
 ///>         title: "Trib - YUI Developer Dashboard",
 ///>         button_text: "See Mojito Dashboard",
 ///>         other: "/mojito"
 ///>       });
 ///>     } else if (view_type === "mojito") {
 ///>       ac.composite.done({
 ///>         title: "Trib - Mojito Developer Dashboard",
 ///>         button_text: "See YUI Dashboard",
 ///>         other: "/"
 ///>       });
 ///>     }
 ///> }
 index: function(ac) {
  // Register helper for use in template
  ac.helpers.expose('linker', createLink);

  var view_type = ac.params.getFromRoute('view_type') || "yui";
  if (view_type === "yui") {
    ac.composite.done({
      title: ac.intl.lang("YUITitle"),
      button_text: "See Mojito Dashboard",
      other: "/mojito"
    });
  } else if (view_type === "mojito") {
    ac.composite.done({
      title: ac.intl.lang("MojitoTitle"),
      button_text: "See YUI Dashboard",
      other: "/"
    });
  }
}
  };
}, '0.0.1', {requires: ['mojito','mojito-composite-addon', 'mojito-params-addon', 'mojito-helpers-addon', 'mojito-intl-addon']});

