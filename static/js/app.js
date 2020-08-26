function updateMap(){
    var geodata="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

    //var population="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv";

    // function(d) { data.set(d.code, +d.pop); })

    d3.json(geodata).then((d)=>{
        console.log(d);

        var boundaries=d.features;
        console.log(boundaries);
        
        defaultCountry=boundaries.filter(c=>c.properties.name=="USA")
        //console.log(defaultCountry)
        var poly=defaultCountry
        var countrygeo = {"type":"FeatureCollection","features":poly}
        //console.log(poly)
        //console.log(countrygeo)

        var map = L.map('myMap').setView([37, -95], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        outline = L.geoJSON(countrygeo).addTo(map)


        d3.select('#selectCountry').on('change.clemi',function(d){
            var userSelection=d3.select('#selectCountry').node().value;
            console.log(userSelection)

            SelectedCountry=boundaries.filter(c=>c.properties.name==userSelection)
            console.log(SelectedCountry)
            var poly=SelectedCountry
            var countrygeo_new = {"type":"FeatureCollection","features":poly}
            //console.log(poly)
            //console.log(countrygeo)
            outline2 = L.geoJSON(countrygeo_new).addTo(map)


        
           

        })




        
    

    });
}

updateMap()


