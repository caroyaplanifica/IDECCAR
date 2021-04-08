const map = L.map('map-template').setView([-31.021380845522756, -64.06144005927875],13);
        
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Castillo Jonathan</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
    }).addTo(map);

