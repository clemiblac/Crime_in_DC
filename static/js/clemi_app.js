function updateMap(){
    
    var news_list="/news";
    var crime_2014="/crime2014";
    var crime_2015="/crime2015";



    // d3.json(news_list).then(function(article){
        //     //console.log(article)

        
        //     /////////////////////               News Code                 ///////////////////////////////////////////////
            
        //     //turning each news title into a hyperlink
        //     hyperlinks=[]
        //     for(var i = 0; i < article.length; ++i) {
        //         var each_article=article[i]
        //         //console.log(each_article);
        //         var each_title=each_article.title
        //         //console.log(each_title);
        //         var each_link=each_article.link;
        //         //console.log(each_link);
        //         var story_link=each_title.link(each_link);
        //         //console.log(story_link);
        //         hyperlinks.push(story_link)
        //     }
        //     var news_id=article.map(s=>s.id)
        //     var news_date=article.map(s=>s.date)

        //     //console.log(news_id)

        //     var values = [
        //         news_date,
        //         hyperlinks
        //       ]
          
        //     var table_data = [{
        //         type: 'table',
        //         columnwidth:[100,300],
        //         header: {
                
        //         values: [["<b>Date</b>"],
        //                     ["<b>Link</b>"]],
        //         align: "center",
        //         line: {width: 1, color: 'black'},
        //         fill: {color: "#61892F"},
        //         font: {family: "Arial", size: 12, color: "white"}
        //         },
        //         cells: {
        //         values: values,
        //         align: "center",
        //         line: {color: "black", width: 1},
        //         font: {family: "Arial", size: 11, color: ["black"]}
        //         }
        //     }];

          
        //     var layout = {
        //         autosize: true,
        //         height: 650,
        //         margin: {
        //             l: 50,
        //             r: 50,
        //             b: 50,
        //             t: 50,
        //             pad: 4
        //             }
        //     };
        //     var config = {responsive: true};
        //     Plotly.newPlot('news', table_data,layout,config);
    //


    d3.json(crime_2014).then(function(c14){
        d3.json(crime_2015).then(function(e){

            console.log(c14);
            // console.log(e);

            ////////////     Creating new object with just date and offense type   ///////////////////////////
            //function to create new ojject
            function omit(obj, props) {
            props = props instanceof Array ? props : [props]
            return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
            }

            offense_by_time_14=[]

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
           //console.log(offense_by_time)



           /////// Test Code for pulling out hour of the day
           //console.log("Testing hour slice")
           var test=offense_by_time_14[6]
           //console.log(test)

           var date=test.REPORT_DAT
           //console.log(date)

           var res = date.slice(11,13);
           //console.log(res)

           test.HOUR = res;
           //console.log(test)
           
           
           ///// Pull out hour of the day for entire object ///
           var hourly_data_14=[]
           for (var i = 0; i < offense_by_time_14.length; i++){
               t=offense_by_time_14[i].REPORT_DAT
               //console.log(t)
               var hour_14 = t.slice(11,13);
               //console.log(hour)
               offense_by_time_14[i].HOUR = hour_14;
               //console.log(offense_by_time[i])
               hourly_data_14.push(offense_by_time_14[i])

            }

            console.log(hourly_data_14)

            var arson_14=hourly_data_14.filter(c=>c.OFFENSE=='ARSON')
            var assault_weapon_14=hourly_data_14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
            var burglary_14=hourly_data_14.filter(c=>c.OFFENSE=='BURGLARY')
            var homocide_14=hourly_data_14.filter(c=>c.OFFENSE=='HOMICIDE')
            var vehicle_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
            var robbery_14=hourly_data_14.filter(c=>c.OFFENSE=='ROBBERY')
            var sex_abuse_14=hourly_data_14.filter(c=>c.OFFENSE=='SEX ABUSE')
            var auto_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT F/AUTO')
            var sex_abuse_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT/OTHER')

            //console.log(arson_14)


            ///\\\ Arson by hour///\\\
            var time_arson_14=arson_14.map(t=>t.HOUR)
            //console.log(time_day)
            var result_arson_14 = {};

            for(var i = 0; i < time_arson_14.length; ++i) {
                if(!result_arson_14[time_arson_14[i]])
                result_arson_14[time_arson_14[i]] = 0;
                ++result_arson_14[time_arson_14[i]];
            }
            console.log(result_arson_14)

            ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
            var time_assault_14=assault_weapon_14.map(t=>t.HOUR)
            var result_assault_14 = {};
            for(var i = 0; i < time_assault_14.length; ++i) {
                if(!result_assault_14[time_assault_14[i]])
                result_assault_14[time_assault_14[i]] = 0;
                ++result_assault_14[time_assault_14[i]];
            }

            ///// Declaring plot variables
            var arson_hour_14=Object.keys(result_arson_14);
            var count_arson_14=Object.values(result_arson_14);

            var assault_hour_14=Object.keys(result_assault_14);
            var count_assault_14=Object.values(result_assault_14);

            var trace1 = {
                type: 'bar',
                x: arson_hour_14,
                y: count_arson_14,
                marker:{color:'#ff00d2'},
                visible:true
            };
              
            var trace2 = {
                type: 'bar',
                x: assault_hour_14,
                y: count_assault_14,
                xaxis: 'x2',
                yaxis: 'y2'
                
            };
              
            var trace3 = {
                type: 'bar',
                x: arson_hour_14,
                y: count_arson_14,
                marker:{color:'#ff00d2'},
                visible:true
            };
              
            var trace4 = {
                type: 'bar',
                x: assault_hour_14,
                y: count_assault_14,
                xaxis: 'x2',
                yaxis: 'y2'
                
            };

            var data = [trace1, trace2, trace3, trace4];

              
            var updatemenus=[{
                buttons: [   
                    {
                        args: [{visible: [true, true,false,false]}],
                        label: '2014 ',
                        method: 'update'
                    },
                    {
                        args: [{visible: [false, false,true,true]}],
                        label:'2015',
                        method:'update'
                    
                    } 
                                
                ],
                direction: 'left',
                pad: {'r': 10, 't': 10},
                showactive: true,
                type: 'buttons',
                x: 0.15,
                xanchor: 'left',
                y: 1.1,
                yanchor: 'top' 
            }];


            var layout = {
                updatemenus: updatemenus,
                xaxis: {//title:"Hour of the day",
                    autotick: false,
                    tickangle: 45,
                    tickcolor: '#000',
                    tickfont: {size: 12}
                    },
                yaxis: {title:"Total crashes",automargin: true,},
                grid: {rows: 2, columns: 1, pattern: 'independent'},
                autosize: true,
                width: 450,
                height: 500,
                margin: {
                    l: 100,
                    r: 50,
                    b: 50,
                    t: 50,
                    pad: 4
                }
            };
              
              var layout2 = {
                grid: {rows: 2, columns: 1, pattern: 'independent'},
              };
              
              Plotly.newPlot('hour', data, layout);





        });

    });
}

updateMap()


