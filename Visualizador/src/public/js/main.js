const map = L.map('map-template').setView([-31.0338,-64.1214],12);
        
L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/${z}/${x}/${y}.png').addTo(map);

