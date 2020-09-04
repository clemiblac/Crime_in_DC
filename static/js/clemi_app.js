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

           /////// Creating new object with just date and offense type
           //function to create new ojject
           function omit(obj, props) {
            props = props instanceof Array ? props : [props]
            return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
           }

           offense_by_time=[]

           for (var i = 0; i < c14.length;i++){
               //console.log(c14[i])
               const obj=c14[i]
               const offense_time = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                        'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                        'OCTO_RECORD_ID','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                        'YBLOCK','XBLOCK'])
               //console.log(offense_time)
               offense_by_time.push(offense_time)
           }

           console.log(offense_by_time)
          
            // usage
            //const obj = { a: 1, b: 2, c: 3, d: 4 }
            //const clone = omit(obj, ['b', 'c'])
            //console.log(clone)
    




        });

    });
}

updateMap()


