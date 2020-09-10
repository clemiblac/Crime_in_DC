var c_2014="/crime2014";
var c_2015="/crime2015";
var c_2016="/crime2016";
var c_2017="/crime2017";
var c_2018="/crime2018";

/* Sunburst Chart*/

d3.json(c_2014).then(function(c14){
    d3.json(c_2015).then(function(c15){
        d3.json(c_2016).then(function(c16){
            d3.json(c_2017).then(function(c17){
                d3.json(c_2018).then(function(c18){

                    //console.log(c14)
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////           Creating new object with just date and offense type         ///////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // function to create new object
                    function omit(obj, props) {
                    props = props instanceof Array ? props : [props]
                    return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
                    }
                
                    
                    ///////////////////                  2014                ////////////////
                
                    offense_by_time_14=[];

                    for (var i = 0; i < c14.length; i++){
                        //console.log(c14[i])
                        const obj=c14[i]
                        const offense_time_14 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                        //console.log(offense_time)
                        offense_by_time_14.push(offense_time_14)
                    }
                    //console.log("OFFENSE AND DATE KEY VALUE PAIRS")
                    console.log(offense_by_time_14)
                    var total_2014=offense_by_time_14.length
                    //console.log(total_2014)


                    var arson_14=offense_by_time_14.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_14=offense_by_time_14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_14=offense_by_time_14.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_14=offense_by_time_14.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_14=offense_by_time_14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_14=offense_by_time_14.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_14=offense_by_time_14.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_14=offense_by_time_14.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_14=offense_by_time_14.filter(c=>c.OFFENSE=='THEFT/OTHER').length
                    console.log(arson_14)

                    ////////////////////////                2015                      ///////////////////////////
                    offense_by_time_15=[];
                    
                    for (var i = 0; i < c15.length; i++){
                            const obj=c15[i]
                            const offense_time_15 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_15.push(offense_time_15)
                    }

                    var total_2015=offense_by_time_15.length
                    //console.log(total_2015)

                    //////////////////////                 2016                     //////////////////////////////
                    offense_by_time_16=[];
                    
                    for (var i = 0; i < c16.length; i++){
                            const obj=c16[i]
                            const offense_time_16 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_16.push(offense_time_16)
                    }
                    var total_2016=offense_by_time_16.length
                    //console.log(total_2016)

                    //////////////////////                 2017                     //////////////////////////////
                    offense_by_time_17=[];
                    
                    for (var i = 0; i < c17.length; i++){
                            const obj=c17[i]
                            const offense_time_17 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_17.push(offense_time_17)
                    }
                    var total_2017=offense_by_time_17.length
                    //console.log(total_2017)

                    ///////////////////////                 2018                     //////////////////////////////
                    offense_by_time_18=[];
                    
                    for (var i = 0; i < c18.length; i++){
                            const obj=c18[i]
                            const offense_time_18 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                                    'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                                    'YBLOCK','XBLOCK'])
                            offense_by_time_18.push(offense_time_18)
                    }

                    var total_2018=offense_by_time_18.length
                    //console.log(total_2018)
        










                    var data = [{
                        type: "sunburst",
                        labels: ["2014", "2015","2016","2017","2018"],
                        parents: ["","","","","", ],
                        values:  [total_2014,total_2015,total_2016, total_2017, total_2018],
                        outsidetextfont: {size: 20, color: "#377eb8"},
                        leaf: {opacity: 0.4},
                        marker: {line: {width: 2}},
                      }];
                      
                      var layout = {
                        margin: {l: 0, r: 0, b: 0, t: 0},
                      };
                      
                      
                      Plotly.newPlot('sunburst1', data, layout);
                      Plotly.newPlot('sunburst2', data, layout);
                      Plotly.newPlot('sunburst3', data, layout);





                })

            })
        })

    })

})




















// news_list="/news";

// d3.json(news_list).then(function(article){
//         console.log(article)

    
//         /////////////////////               News Code                 ///////////////////////////////////////////////
        
//         //turning each news title into a hyperlink
//         hyperlinks=[]
//         for(var i = 0; i < article.length; ++i) {
//             var each_article=article[i]
//             //console.log(each_article);
//             var each_title=each_article.title
//             //console.log(each_title);
//             var each_link=each_article.link;
//             //console.log(each_link);
//             var story_link=each_title.link(each_link);
//             //console.log(story_link);
//             hyperlinks.push(story_link)
//         }
//         var news_id=article.map(s=>s.id)
//         var news_date=article.map(s=>s.date)

//         //console.log(news_id)

//         var values = [
//             news_date,
//             hyperlinks
//           ]
        
//         var table_data = [{
//             type: 'table',
//             columnwidth:[100,300],
//             header: {
            
//             values: [["<b>Date</b>"],
//                         ["<b>Link</b>"]],
//             align: "center",
//             line: {width: 1, color: 'black'},
//             fill: {color: "#61892F"},
//             font: {family: "Arial", size: 12, color: "white"}
//             },
//             cells: {
//             values: values,
//             align: "center",
//             line: {color: "black", width: 1},
//             font: {family: "Arial", size: 11, color: ["black"]}
//             }
//         }];

        
//         var layout = {
//             autosize: true,
//             height: 650,
//             margin: {
//                 l: 50,
//                 r: 50,
//                 b: 50,
//                 t: 50,
//                 pad: 4
//                 }
//         };
//         var config = {responsive: true};

//         Plotly.newPlot('news', table_data,layout,config);
        
// });
