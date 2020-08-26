function updateMap(){
    var geodata="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

    //var population="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv";

    // function(d) { data.set(d.code, +d.pop); })

    d3.json(geodata).then((d)=>{
        console.log(d);

        var boundaries=d.features;
        console.log(boundaries);

        var CountryList=["USA", "China","Russia", "Venezuela","Morocco"]
        var targetList=[]
        for (var i=0;i<CountryList.length;i++){
            //console.log(CountryList[i])
            targetCountries=boundaries.filter(c=>c.properties.name==CountryList[i])
            //console.log(targetCountries)
            targetList.push(targetCountries)
        }
        console.log(targetList)
        

        var map = L.map('myMap').setView([37, -95], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.geoJson(d).addTo(map);


        d3.select('#selectCountry').on('change.clemi',function(d){
            var userSelection=d3.select('#selectCountry').node().value;
            console.log(userSelection)
            
            //selectedCountry=data.filter(c=>c.state==userSelection)

            // Select a country
            var selectedCountry=targetList.filter(c=>c.properties.name==userSelection)
            console.log(selectedCountry)
            
            /// Change view to show selected country
            //var map = L.map('myMap').setView([27, -60], 4);

        
           

        })




        
    

    });
}

updateMap()


