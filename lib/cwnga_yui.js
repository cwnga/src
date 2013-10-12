YUI().use("jsonp", "node",function (Y) {

    function handleJSONP(response) {
        search_result_html = "";
        for (var key in response.data){
            console.log(key);
            if (key != "0") {
            search_result_html +=getHtml(response.data[key]);
        }
    }
    append_search_list(search_result_html);
}
function getHtml(data) {
    return row_data;
}
function append_search_list(html)
{
    org_html =   Y.one("#search_result").getHTML();
    html = org_html+html;

    Y.one("#search_result").setHTML(html);
}
function reset_search_list(){

    Y.one("#search_result").setHTML("");
}

Y.one("#search_btn").on("click", function (e) {
    // e.g. https://api.github.com/users/yui?callback={callback}
    reset_search_list();
    kw = "";
    if (Y.one("#kw")) {
        kw = Y.one("#kw").get('value');
    }


    var url = 'http://tw.serviceplus.yahoo.com/garden/search_services?callback={callback}&kw='+kw+'&undedup=0&unspc=0&areaa=tw&sort=3&cp=1&ppa=30&pa=10&type=srplist&vmode=0&action=srplistquery';
    Y.jsonp(url, handleJSONP);
});

});
