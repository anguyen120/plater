var map = L.map('map', {
    center: [[40.775,-73.972]],
    scrollWheelZoom: false,
    inertia: true,
    inertiaDeceleration: 2000  
});

map.setView([40.775,-73.972], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: 'superpikar.n28afi10',
    accessToken: 'pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw'
}).addTo(map);

$('#locate-position').on('click', function(){
    map.locate({setView: true, maxZoom: 15});
});
  
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    L.marker(e.latlng).addTo(map);
    L.circle(e.latlng, radius).addTo(map);

    var yelp_query = {
        "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${lat}&longitude=${lng}&sort_by=rating`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${API_KEY}`
        },
    };

    $.ajax(yelp_query).done(function (response) {
        var businesses = response.businesses;
        businesses.forEach(function (business) {
            L.marker([business.coordinates.latitude, business.coordinates.longitude]).addTo(map);
        });
    });
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
