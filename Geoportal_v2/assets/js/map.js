var map = L.map('map').setView([-31.02,-64.09], 13);

//OPENSTREETMAP
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Municipalidad de Colonia Caroya',
}).addTo(map);