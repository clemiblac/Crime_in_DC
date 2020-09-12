var myMap3 = L.map("myMap3", {
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
}).addTo(myMap3);

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

d3.select('#submit3').on('click', function(filters){
    if(crimeLayer){
        myMap3.removeLayer(crimeLayer);
        crimeLayer.clearLayers();
        markers = [];
    }
    if(heatArray){
        myMap3.removeLayer(heatArray);
        heat = [];
    }

    var yearSelection = d3.select("#selectYear3").node().value;
    var month = d3.select("#selectMonth3").node().value;
    var offenseh = d3.select("#selectCrimeHeat3").node().value;
    var offensem = d3.select("#selectCrimeMarker3").node().value;
    var link = `/crime${yearSelection}`;
    d3.json(link).then(function(datas) {
        if(offenseh == "VIOLENT"){
            var data = datas.filter(element => element.OFFENSE == "ASSAULT W/DANGEROUS WEAPON" || element.OFFENSE == "ROBBERY" || element.OFFENSE == "HOMICIDE" || element.OFFENSE == "SEX ABUSE");
        }
        else if(offenseh == "NONVIOLENT"){
            var data = datas.filter(element => element.OFFENSE == "ARSON" || element.OFFENSE == "BURGLARY" || element.OFFENSE == "THEFT F/AUTO" || element.OFFENSE == "MOTOR VEHICLE THEFT" || element.OFFENSE == "THEFT/OTHER");
        }
        else{
            var data = datas;
        }
        for (var i = 0; i < data.length; i++) {
            var loc = [data[i].Y, data[i].X];
            if (loc) {
              heat.push(loc)
            }
        }
        heatArray = L.heatLayer(heat, {
            radius: 11,
            blur: 20
        }).addTo(myMap3);
        var data_month = datas.filter(datas => datas.REPORT_DAT.substring(4,8) == month);
        if(offensem == "VIOLENT"){
            var filtered = data_month.filter(element => element.OFFENSE == "ASSAULT W/DANGEROUS WEAPON" || element.OFFENSE == "ROBBERY" || element.OFFENSE == "HOMICIDE" || element.OFFENSE == "SEX ABUSE");
        }
        else if(offensem == "NONVIOLENT"){
            var filtered = data_month.filter(element => element.OFFENSE == "ARSON" || element.OFFENSE == "BURGLARY" || element.OFFENSE == "THEFT F/AUTO" || element.OFFENSE == "MOTOR VEHICLE THEFT" || element.OFFENSE == "THEFT/OTHER");
        }
        else{
            var filtered = data_month.filter(element => element.OFFENSE == offensem);
        }
        for (var i = 0; i < filtered.length; i++) {
            var location = [filtered[i].Y, filtered[i].X];
            if (location) {
              markers.push(location)
            }
        }
        for (var i=0; i < markers.length; i++){
            var marker = L.marker(markers[i], {icon: redMarker}).addTo(crimeLayer);
            marker.bindPopup("<h4><strong>" + filtered[i].OFFENSE + "</strong></h4><hr><h5><strong>Report Time: </strong>" + filtered[i].REPORT_DAT + "</h5> <hr> <h5><strong>Report Location: </strong>" + filtered[i].BLOCK + "</h5>");
        }  
        crimeLayer.addTo(myMap3);
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

const policecheck3 = document.getElementById('police3');
policecheck3.addEventListener('change', (event) =>{
    if (event.target.checked){
        policeLayer.addTo(myMap3);
        d3.json(police).then(function(data_po) {
            console.log(data_po);
            for (var i = 0; i < data_po.length; i++) {
                var loc = [data_po[i].Y, data_po[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: blueMarker}).addTo(policeLayer);
                }
                marker.bindPopup("<h6><strong>" + data_po[i].NAME + "</strong></h6><hr><h6><strong>Station Contact: </strong>" + data_po[i].CONTACT + "</h6>");
            };
            policeLayer.addTo(myMap3);
        });
    }
    else{
        myMap3.removeLayer(policeLayer);
    }
});

const grocerycheck3 = document.getElementById('grocery3');
grocerycheck3.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(grocery).then(function(data_g) {
            console.log(data_g);
            for (var i = 0; i < data_g.length; i++) {
                var loc = [data_g[i].Y, data_g[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: greenMarker}).addTo(groceryLayer);
                }
                marker.bindPopup("<h6><strong>" + data_g[i].STORENAME + "</strong></h6><hr><h6><strong>Store Address: </strong>" + data_g[i].ADDRESS + "</h6>");
            };
            groceryLayer.addTo(myMap3);
        });
    }
    else{
        myMap3.removeLayer(groceryLayer);
    }
});

const pubschoolcheck3 = document.getElementById('pub-school3');
pubschoolcheck3.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(pubschool).then(function(data_pu) {
            console.log(data_pu);
            for (var i = 0; i < data_pu.length; i++) {
                var loc = [data_pu[i].Y, data_pu[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: purpleMarker}).addTo(publicLayer);
                }
                marker.bindPopup("<h6><strong>" + data_pu[i].NAME + "</strong></h6><hr><h6><strong>School Address: </strong>" + data_pu[i].ADDRESS + "</h6>");
            };
            publicLayer.addTo(myMap3);
        });
    }
    else{
        myMap3.removeLayer(publicLayer);
    }
});

const prischoolcheck3 = document.getElementById('pri-school3');
prischoolcheck3.addEventListener('change', (event) =>{
    if (event.target.checked){
        d3.json(prischool).then(function(data_pr) {
            console.log(data_pr);
            for (var i = 0; i < data_pr.length; i++) {
                var loc = [data_pr[i].Y, data_pr[i].X];
                if (loc) {
                    marker = L.marker(loc, {icon: dapurpleMarker}).addTo(privateLayer);
                }
                marker.bindPopup("<h6><strong>" + data_pr[i].NAME + "</strong></h6><hr><h6><strong>School Address: </strong>" + data_pr[i].ADDRESS + "</h6>");
            };
            privateLayer.addTo(myMap3);
        });
    }
    else{
        myMap3.removeLayer(privateLayer);
    }
});

var link = "static/data/dc.geojson";
var wardLayer = new L.LayerGroup();

const wardcheck3 = document.getElementById('wards3');
wardcheck3.addEventListener('change', (event) =>{
    if (event.target.checked){
        console.log("clicked");
        d3.json(link).then(function(data) {
            console.log(data);
            wardLayer = L.geoJson(data, {
                            onEachFeature: function(feature, layer) {
                            layer.on({
                                mouseover: function(event) {
                                layer = event.target;
                                layer.setStyle({
                                    fillOpacity: 0.4
                                });
                                },
                                mouseout: function(event) {
                                layer = event.target;
                                layer.setStyle({
                                    fillOpacity: 0.2
                                });
                                },
                                click: function(event) {
                                myMap3.fitBounds(event.target.getBounds());
                                }
                            });
                            layer.bindPopup("<h6>" + feature.properties.NAME + "</h6>");
                            }   
                        }).addTo(myMap3);
        });
    }
    else{
        myMap3.removeLayer(wardLayer);
    }
});

var tbody3 = document.getElementById("news3");
var newslist = "/news";
d3.json(newslist).then(function(articles) {
    for (i=0; i < 15; i++){
        var row = document.createElement("tr");
        console.log(row.id);
        var anchor = document.createElement('a');
        anchor.setAttribute('href', articles[i].link);
        anchor.innerText = articles[i].title;
        var linkcell = document.createElement("td").appendChild(anchor);
        row.appendChild(linkcell);
        var d = document.createElement('p');
        d.innerText = "Published: " + articles[i].date;
        var datecell = document.createElement("td").appendChild(d);
        row.appendChild(datecell);
        tbody3.appendChild(row);
    }
});
