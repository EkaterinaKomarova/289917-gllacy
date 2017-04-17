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

/* Модальные окна */
var modal_search = document.querySelector (".search");
var popup_search = document.querySelector (".modal-search");
var modal_enter = document.querySelector (".enter");
var popup_enter = document.querySelector (".modal-enter");
var modal_basket = document.querySelector (".basket");
var popup_basket = document.querySelector (".modal-basket");

modal_search.addEventListener("mouseover", function(event) {
  event.preventDefault();
  popup_search.classList.add("modal-content-show");
});
modal_search.addEventListener("mouseout", function(event) {
  event.preventDefault();
  popup_search.classList.remove("modal-content-show");
});
modal_enter.addEventListener("mouseover", function(event) {
  event.preventDefault();
  popup_enter.classList.add("modal-content-show");
});
modal_enter.addEventListener("mouseout", function(event) {
  event.preventDefault();
  popup_enter.classList.remove("modal-content-show");
});
modal_basket.addEventListener("mouseover", function(event) {
  event.preventDefault();
  popup_basket.classList.add("modal-content-show");
});
modal_basket.addEventListener("mouseout", function(event) {
  event.preventDefault();
  popup_basket.classList.remove("modal-content-show");
});