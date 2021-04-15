/*var map = L.map('map-template').setView([-31.055328, -64.060105], 12);
        
L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Castillo Jonathan</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);*/

const map = new L.Map('map-template', { center: new L.LatLng(-31.055328, -64.060105), zoom: 12 });
const osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
                
map.addLayer(osm);
                
// Load kml file
fetch('src/public/ejido.kml')
    .then(res => res.text())
    .then(kmltext => {
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        map.addLayer(track);
                
        // Adjust map to show the kml
        const bounds = track.getBounds();
        map.fitBounds(bounds)
        });
