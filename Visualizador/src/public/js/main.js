var map = L.map('map-template').setView([-31.055328, -64.060105], 12);
        
L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Castillo Jonathan</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

var municc = L.map('map-template').setView([-31.021363, -64.061413], 15);

L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Castillo Jonathan</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(municc);

var ejido = new L.tileLayer.WMS('http://200.110.196.229:8080/geoserver/ideccar/wms',{
    layers: 'ideccar:radio_municipal',
    styles: "",
    format: 'images/png',
    attribution: 'Castillo Jonathan'
}).addTo(map);