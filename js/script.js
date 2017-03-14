/* Маркер на карте */
/* Координаты маркера 59.938631,30.323055 */
var map;
function init () {
map = new YMaps.Map(document.getElementById("yandex-map"));

var s = new YMaps.Style();
s.iconStyle = new YMaps.IconStyle();
s.iconStyle.href = "img/Map_IceCream.png";
s.iconStyle.size = new YMaps.Point(218, 142);
var point = new YMaps.GeoPoint(59.938631,30.323055);
var placemark = new YMaps.Placemark(point, {style: s});
map.addOverlay(placemark);
}