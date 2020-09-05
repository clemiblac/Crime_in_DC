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