YUI.add('SearchModule', function(Y, NAME) {

  Y.namespace('mojito.models')[NAME] = {

    init: function(config) {
         this.config = config;
    },
    getData: function(callback) {
        var uri = "http://tw.serviceplus.yahoo.com/search/search_services?kw=bmw&catid=&undedup=0&unspc=0&cata=&catb=&pricea=&priceb=&items=&areaa=tw&areab=&areac=&sort=3&total=3824&cp=2&ppa=30&pa=10&type=srplist&vmode=0&action=srplistquery";

        params = {};
        Y.mojito.lib.REST.GET(uri, params,null,function(err, response) {
            if (err) {
                callback(err);
            }
            //console.log(response._resp.responseText);

data  = response._resp.responseText;
data = Y.JSON.parse(data);
console.log(data);
/*
 *
{ info: 'srplistquerySuccess',
  data:
   [ { total: '3824',
       cp: '2',
       ppa: '30',
       pa: '10',
       type: 'srplist',
       psaa: '30' },
     { mid: '000014631597',
       img: 'http://nevec.yimg.com/tw_ec00-0/68/51/m1/0000247131360-6204.jpg',
       w: '160',
       h: '120',
       title: '2007年BMW 523I 電子線傳 總代理汎德 純跑8萬【宜昌汽車】',
       ptype: '2',
       utime: '2013/10/25 09:05',
       promobg: '0',
       promokit: '0',
       ad_map_display: 'on',
       tag: '-1',
       ad_summary: '純跑8萬 保證一手車 全程原廠BMW保養(有紀錄可查詢)',
       desc: '純跑8萬 保證一手車 全程原廠BMW保養(有紀錄可查詢)',
       advv: '1',
       location: '臺灣新北市土城區金城路一段110號',
       olink: '',
       poster: '【宜昌汽車 SAVE認證】',
       lat: '24.975279',
       lng: '121.44691',
       link: 'http://tw.serviceplus.yahoo.com/booth/seller/Y8186302522',
       price: '電洽',
       mlink: 'http://tw.serviceplus.yahoo.com/item/detail/000014631597' },
     { mid: '000014631355',
*/

            callback(null, response._resp.responseText);
        });
    }
};
}, '0.0.1', {requires: ['mojito-rest-lib', 'json']});

