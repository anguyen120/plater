function haversine(lat1, lng1, lat2, lng2) {
    var R = 6371000; // Radius of the earth in m
    var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    var dLon = (lng2-lng1).toRad(); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in m
    return d;
}
  
/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
        return this * Math.PI / 180;
    }
}

const YELP = '7zJt$*fZBj!7ZywLrCXaB&&q36f!5eN!LTn3&99@B3nfjMdb@Mc4@k*KZ*$8CeJwfZA29EjVyqB68XuQG&Jh6Js2TGcBm4S!K5TtxFjn4PzF6Z&tVhA%NWj^!zo34jiK@#Lz9NVF$*dy67eaqWSzdhe96wggjtw@znfC$EH3$uV2vS2H7#JBHHNt&%xrkBZTGg%3MMpM3!zNevK%*ejQac#JxnV@P87BwA9c5bO*u2pMzcvo&&L7&%%EPp3TuahU2hRS#Lh*nk5633H2_cHheL62V#EA2iggw*ef&fq4*Tc9*xLamx4yiBXWPzxyRKSWN!CW&QJit&%Ha9Dl763ZspHDWZc#xeU2#jAZG*LNx7z69bpxFmswyLtA483XtX!m9J@6SXgUf2jr2zzz3zSJ5GXg9@DwxSAf2L$Qtjo8%!yG$c7$jLUUhXxr1!%KhUr!Hy!S3RXNxPndax2XGfdQpmuFD4A&Uv@kfk3f!6R%bsXqECb!Xm@2Nxtc5mWLec%ZPKuRZfjy5*Gi-R^UDDGaVPud&iGxr3Q^ez$#chUtNmF5swGwAK$a$%B$tYV5%Yi%6hTQxqM9obXz%dq5mWJfn!3PbKkZX!UQH7B$s9u@R9PF#TUEJhUN5WxY2B&go#JkVH7ap%jrwaR5s2zb!k^fi^TJwj7$NcsS&anq$qcoUduR$VgmW4KwZU%2d3iZonqUWL79FushxxgD&cHz^#i5FQPBgs@T233#7NH2qB69JmaoEaHEsi*tyevq^r4#9qy7Kg3Q2myPPnA&jKi&*D7Nvrz6FJbezOx&G7iMumSq^ivacTZ*4f68sPuwyQR!waVpau9GA#u3REJsQ64geqBYdVV!pK!fuAh#g4yxzeYGmGR#n*Ga%8SRf%7p7Vqx6yY2cgPT9$x6wDm6wFY2Aa*2pyP%aU4HmB6cPBs&ixTVNyAL!q2$ZxocnG@4C&c9!Dqi*F@QGqxH%zW5gLbN*!NY7D$Znrn^r^gW$uS2K8CYgcqc!oxbk8Xv^$UehAjj#HjeVuLW0%dRw&#5FB%RPsRVTRW2j_a^J*RfUY7ymKp5fknMLDKZKY%UaUAePL9J#XnKAK@Dq9KKFeG32JnbzhJ$cE*VU$dM&QgB79vw*@L2Uv5kB3^N3LxtfCXx2L%jy&k2nZK%4qX@QFk6PgkRdQRqaEBpo9$qRNkpczr9roc&MS3ar^y*DGYVt38uedhNZQh^^RXCTmL4haE&x%or2Hx5FZe6ZYw$cJ8#F@aq8&d3PG#jLpD3aGnwW5%TQ%hw^X6Rto39@ygQ!Kc39SwE@W4mqik9LpHr!rXU&B$84NjNHEhSxc7cYwax5fu!2zPEK8fInSs*rrh4RqNW!7fU3KBaC*5H$PQUEBbEkg3diZh#kUkB43F^wfbmhP7L4pA&U&xM^8nzcHfT4tWPgHj35v&2@zLq&i@XBdx#!rdwnUW9fMK25Z8tTxLRMit84%e^5B9&Qf9PbU!3t#%^r2iSCPpYC*UA8nq48apzd%#gj&Gh@w8#Dqy^YHz2isF!xvFM9X$!N2EfmS*ATiSSdsK%JO8Q@q86hi!^cLv^X4Xmn&OCMN^QhaSUptVH&j92&nMKYT!GzKjx^Ejyj!DAzZ32TJe&3u3GH@8iPe*veYcTjMNb6JCx4!*GULx9%z*g46s$cm%ej35xSVKr&U%zBxc_a%EuzYvuw7pQqC8cUx$!6RyQ2*7AAHL!pExmSnP%6iUgAB67NJ#^NeC&#J2RZPfv!*q8sZ8$rsK*AMz$3qh9juzkiLR*5Si37g8HBM&&u4o8WMM@R5bq6&qsiSjkb3B^5@8at@i%6*K7Nj@FJabg8eGLivG6r*wWma7vdKkKinUtbH@b2K5QVAG3NgXMJ#j$oWcCG!gxeK7&44gX5gWWh5K4RNr2&!&LEy^8xakFMft@qhyef^7wjs*6EggUDRLY@FZ@A8$r*9D4M^pgpq5vUBPuoxmNKL$LhfS2dPXQ4qDtP#8eZjmdMGbnyhnW$Xm97UwJNrTD!2uyHHpTk7@kFWfsq#@kbouago3G53xzrrkF@NDGz%HE25r89CFQ7@7a$RJ3FV5%DfwYXboU3mkGP$FC%9Kwfz5x8T$0MYfYnjze2Bw6GK&v^gkvlM55oHnsz5$b@kYY#JzNfwCof6k9@DVajzSt#RpK^x4s8PDNFJbv*aZ*z4c6!#8na@m2fchdgB4n9*nRnynMEoAsp8hhfZod2xJH^qg@WxFN*ALL%ZTgt9@4xmRKuinodV79@$RgFZf&XY3PzN*SbW$tAYhWK^u%cQ97@R!qKDPKQ84dDYeDp9HFqk24@DP%8Rw4j2SWspdiE!jHNAzeYH6DLdY#w$*!dxfjFsjze5#NNBsV!CdVp54Tn%hfv5X*#iF@*RAHEE@zV#cs7MqaMfFtDHE@qSnh9oFqX%rS6CPnWbJuZ@t9izM3M591*u!AW3j5QKjtULFNx*uRl!GQmckW@8%3Nx5rhJXN!YA#7&v^YQTpc$kb$n#d9MwMNDo5TuAZkp#%vt4ePvBZ!iRTdJhnRSXY6bCqh&T4wjjrqPyRKqK!2@@p8giwWR*6e9JLs3JhhY*x@TiY$fVkdLqXro9qC35Nuy^$T7VPSf&xEdtQa8xG4kjzwegvXzM8w28E%TMf9h^fzU$crni7o%dQajfnAmv9nBFqy!YpM8aACyae3GiDF^L&4X3x'; 
var key = ""; for (var i = 20; i < YELP.length; i=i+21) key += YELP.charAt(i);

var map = L.map('map', {
    center: [[40.775,-73.972]],
    scrollWheelZoom: false,
    inertia: true,
    inertiaDeceleration: 2000  
});

var circle_marker = new L.circle();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'superpikar.n28afi10',
    accessToken: 'pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw'
}).addTo(map);

var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var markerGroup = L.layerGroup().addTo(map);

function yelp_call(lat, lng) {
    markerGroup.clearLayers();
    map.removeLayer(circle_marker);
    L.marker([lat, lng]).addTo(markerGroup);
    
    var yelp_query = {
        "url": `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${lat}&longitude=${lng}&sort_by=rating`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${key}`
        },
        success: function (response) {   // find radius of furthest marker
            var radius = -1;
            response.businesses.forEach(function (business) {
                var distance = haversine(response.region.center.latitude, response.region.center.longitude, business.coordinates.latitude, business.coordinates.longitude);

                if (distance > radius) {
                    radius = distance;
                }
            });

            circle_marker = new L.circle([response.region.center.latitude, response.region.center.longitude], radius+250).addTo(map);
            map.addLayer(circle_marker);
        }
    };

    $.ajax(yelp_query).done(function (response) {
        var businesses = response.businesses;
        businesses.forEach(function (business) {
            var content = `<h3><a href="${business.url}">${business.name}</a></h3>` +
                        `<p style="margin: 0px; display: inline-block; color: #2b273c;">${business.rating} stars</p>` +
                        `<p style="margin: 0px; display: inline-block; color: #777777;">&nbsp;(${business.review_count} reviews)</p><br/>` +
                        `<img src="${business.image_url}" style="width: inherit; height: auto; padding: 3% 0 0 0;"><br/>` +
                        `<p style="margin: 0px; display: inline-block; color: #777777;">${business.price}</p>` +
                        `<p style="margin: 0px; display: inline-block; color: #777777;">&nbsp;&bull;&nbsp;${business.categories[0].title}</p><br/>` +
                        `<p style="margin: 0px; color: #777777;">${business.display_phone}</p>` +
                        `<p style="margin: 0px; color: #777777;">${business.location.address1}</p>`
            ;

            L.marker([business.coordinates.latitude, business.coordinates.longitude], {icon: redIcon}).addTo(markerGroup).bindPopup(content);
        });
    });
}

map.setView([40.775, -73.972], 15);
yelp_call(40.775, -73.972);

$('#locate-position').on('click', function(){
    map.locate({setView: true, maxZoom: 15});
});
  
function onLocationFound(e) {
    yelp_call(e.latlng.lat, e.latlng.lng);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
