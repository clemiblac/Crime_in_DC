var myMap = L.map("myMap1", {
    center: [38.8951, -77.0364],
    zoom: 12
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Use this link to get the geojson data.
  
  // Grabbing our GeoJSON data..
//   d3.json(link).then(function(data) {
//       console.log(data);
//       L.geoJson(data, {
//               onEachFeature: function(feature, layer) {
//                 layer.on({
//                   mouseover: function(event) {
//                     layer = event.target;
//                     layer.setStyle({
//                       fillOpacity: 0.9
//                     });
//                   },
//                   mouseout: function(event) {
//                     layer = event.target;
//                     layer.setStyle({
//                       fillOpacity: 0.5
//                     });
//                   },
//                   click: function(event) {
//                     myMap.fitBounds(event.target.getBounds());
//                   }
//                 });
//                 layer.bindPopup("<h1>" + feature.properties.NAME + "</h1>");
//               }
//         }).addTo(myMap);
//     });
var redMarker = L.AwesomeMarkers.icon({
    icon: 'exclamation-circle',
    prefix: 'fa',
    markerColor: 'red'
});
var blueMarker = L.AwesomeMarkers.icon({
    icon: 'shield-alt',
    prefix: 'fa',
    markerColor: 'cadetblue'
});
var greenMarker = L.AwesomeMarkers.icon({
    icon: 'shopping-cart',
    prefix: 'fa',
    markerColor: 'green'
});
var purpleMarker = L.AwesomeMarkers.icon({
    icon: 'book-open',
    prefix: 'fa',
    markerColor: 'purple'
});
var dapurpleMarker = L.AwesomeMarkers.icon({
    icon: 'book-open',
    prefix: 'fa',
    markerColor: 'darkpurple'
});

var crimeLayer = new L.LayerGroup();
var heatArray = new L.LayerGroup();
var heat = [];
var markers = [];

d3.select('#submit').on('click', function(filters){
    if(crimeLayer){
        console.log("crimeLayer detected");
        myMap.removeLayer(crimeLayer);
        crimeLayer.clearLayers();
        markers = [];
    }
    if(heatArray){
        myMap.removeLayer(heatArray);
        heat = [];
    }
    // Use this link to get the geojson data.
    console.log('heat length ' + heat.length);
    var yearSelection = d3.select("#selectYear").node().value;
    var month = d3.select("#selectMonth").node().value;
    var offense = d3.select("#selectCrime").node().value;
    var link = `/crime${yearSelection}`;
    console.log(yearSelection);
    console.log(month);
    console.log(offense);
    console.log(link);
    d3.json(link).then(function(data) {
        console.log(data);
        console.log(data[0].REPORT_DAT.substring(4,8));
        for (var i = 0; i < data.length; i++) {
            var loc = [data[i].Y, data[i].X];
            if (loc) {
              heat.push(loc)
            }
        }
        heatArray = L.heatLayer(heat, {
            radius: 12,
            blur: 20
        }).addTo(myMap);
        console.log('heat length ' + heat.length);
        var data_month = data.filter(data => data.REPORT_DAT.substring(4,8) == month);
        var filtered = data_month.filter(element => element.OFFENSE == offense);
        console.log(filtered);
        for (var i = 0; i < filtered.length; i++) {
            var location = [filtered[i].Y, filtered[i].X];
            console.log(location);
            if (location) {
              markers.push(location)
            }
        }
        console.log(markers);
        for (var i=0; i < markers.length; i++){
            var marker = L.marker(markers[i], {icon: redMarker}).addTo(crimeLayer);
            marker.bindPopup("<h1>" + filtered[i].REPORT_DAT + "</h1> <hr> <h4>" + filtered[i].BLOCK + "</h4>");
        }  
        crimeLayer.addTo(myMap);
    });
});

var grocery = "/grocery";
var police = "/police";
var pubschool = "/pubschool";
var prischool = "/prischool";
var policeLayer = new L.LayerGroup();
var groceryLayer = new L.LayerGroup();
var publicLayer = new L.LayerGroup();
var privateLayer = new L.LayerGroup();

const policecheck = document.getElementById('police');
policecheck.addEventListener('change', (event) =>{
    if (event.target.checked){
        policeLayer.addTo(myMap);
        d3.json(police).then(function(data_po) {
            console.log(data_po);
            for (var i = 0; i < data_po.length; i++) {
                var loc = [data_po[i].Y, data_po[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: blueMarker}).addTo(policeLayer);
                }
                marker.bindPopup("<h1>" + data_po[i].NAME + "</h1> <hr> <h4>" + data_po[i].CONTACT + "</h4>");
            };
            policeLayer.addTo(myMap);
        });
    }
    else{
        myMap.removeLayer(policeLayer);
    }
});

const grocerycheck = document.getElementById('grocery');
grocerycheck.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(grocery).then(function(data_g) {
            console.log(data_g);
            for (var i = 0; i < data_g.length; i++) {
                var loc = [data_g[i].Y, data_g[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: greenMarker}).addTo(groceryLayer);
                }
                marker.bindPopup("<h1>" + data_g[i].STORENAME + "</h1> <hr> <h4>" + data_g[i].ADDRESS + "</h4>");
            };
            groceryLayer.addTo(myMap);
        });
    }
    else{
        myMap.removeLayer(groceryLayer);
    }
});

const pubschoolcheck = document.getElementById('pub-school');
pubschoolcheck.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(pubschool).then(function(data_pu) {
            console.log(data_pu);
            for (var i = 0; i < data_pu.length; i++) {
                var loc = [data_pu[i].Y, data_pu[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: purpleMarker}).addTo(publicLayer);
                }
                marker.bindPopup("<h1>" + data_pu[i].NAME + "</h1> <hr> <h4>" + data_pu[i].ADDRESS + "</h4>");
            };
            publicLayer.addTo(myMap);
        });
    }
    else{
        myMap.removeLayer(publicLayer);
    }
});

const prischoolcheck = document.getElementById('pri-school');
prischoolcheck.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(prischool).then(function(data_pr) {
            console.log(data_pr);
            for (var i = 0; i < data_pr.length; i++) {
                var loc = [data_pr[i].Y, data_pr[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: dapurpleMarker}).addTo(privateLayer);
                }
                marker.bindPopup("<h1>" + data_pr[i].NAME + "</h1> <hr> <h4>" + data_pr[i].ADDRESS + "</h4>");
            };
            privateLayer.addTo(myMap);
        });
    }
    else{
        myMap.removeLayer(privateLayer);
    }
});

