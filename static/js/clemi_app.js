function updateMap(){
    var geodata="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
    var news_list="/news";

    //var population="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv";

    // function(d) { data.set(d.code, +d.pop); })

    CountryCoordDict = {
        "USA": [37, -95 ],
        "China": [35.8617, 104.1954],
        "Russia": [61.5240, 105.3188],
        "Venezuela": [6.4238, -66.5897],
        "Morocco": [31.7917, -7.0926]
    }

    d3.json(geodata).then(function(d){
        //console.log(d);
        d3.json(news_list).then(function(article){
            console.log(article)


            ///////////////////////////                Map code             ////////////////////////////////////////////
            var boundaries=d.features;
            //console.log(boundaries);
            
            defaultCountry=boundaries.filter(c=>c.properties.name=="USA")
            //console.log(defaultCountry)
            var poly=defaultCountry
            var countrygeo = {"type":"FeatureCollection","features":poly}
            //console.log(poly)
            //console.log(countrygeo)

            var map = L.map('myMap').setView([37, -95], 3);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            outline = L.geoJSON(countrygeo).addTo(map)
        
            /////////////////////               News Code                 ///////////////////////////////////////////////

            var news_id=article.map(s=>s.id)
            var news_title=article.map(s=>s.title)
            var news_link=article.map(s=>s.link)
            console.log(news_id)

            var values = [
                news_id,
                news_title,
                news_link
              ]
          
          var table_data = [{
            type: 'table',
            header: {
               
              values: [["<b>ID</b>"], ["<b>title</b>"],
                           ["<b>Link</b>"]],
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: "grey"},
              font: {family: "Arial", size: 12, color: "white"}
            },
            cells: {
              values: values,
              align: "center",
              line: {color: "black", width: 1},
              font: {family: "Arial", size: 11, color: ["black"]}
            }
          }]
          
          Plotly.newPlot('news', table_data);









            d3.select('#selectCountry').on('change.clemi',function(d){
                var userSelection=d3.select('#selectCountry').node().value;
                console.log(userSelection)

                SelectedCountry=boundaries.filter(c=>c.properties.name==userSelection)
                console.log(SelectedCountry)
                var poly=SelectedCountry
                var countrygeo_new = {"type":"FeatureCollection","features":poly}
                //console.log(poly)
                //console.log(countrygeo)

                if(outline){
                    map.removeLayer(outline)
                };
                outline = L.geoJSON(countrygeo_new).addTo(map);
                var coordinates = CountryCoordDict[userSelection];
                console.log(coordinates);
                
                
                if(SelectedCountry == 'USA' || SelectedCountry == 'Russia'){
                    map.setView(coordinates, 1)
                    
                }
                else if(SelectedCountry == 'Venzuela' || SelectedCountry == 'Morocco'){
                    map.setView(coordinates,14)
                }
                else{
                    map.setView(coordinates,4)
                }
                


            
            

            })



        })
        
    

    });
}

updateMap()


