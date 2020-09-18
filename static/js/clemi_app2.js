var crime_2014="/crime2014";
var crime_2015="/crime2015";
var crime_2016="/crime2016";
var crime_2017="/crime2017";
var crime_2018="/crime2018";

/* Sunburst Chart*/

d3.json(crime_2014).then(function(c14){
    d3.json(crime_2015).then(function(c15){
        d3.json(crime_2016).then(function(c16){
            d3.json(crime_2017).then(function(c17){
                d3.json(crime_2018).then(function(c18){

                    //console.log(c14)
                    total_2014=c14.length
                    var arson_14=c14.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_14=c14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_14=c14.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_14=c14.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_14=c14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_14=c14.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_14=c14.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_14=c14.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_14=c14.filter(c=>c.OFFENSE=='THEFT/OTHER').length

                   

                    // ////////////////////////                2015                      ///////////////////////////
                   
                    total_2015=c15.length
                    var arson_15=c15.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_15=c15.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_15=c15.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_15=c15.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_15=c15.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_15=c15.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_15=c15.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_15=c15.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_15=c15.filter(c=>c.OFFENSE=='THEFT/OTHER').length

                    //////////////////////                 2016                     //////////////////////////////
                    total_2016=c16.length
                    var arson_16=c16.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_16=c16.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_16=c16.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_16=c16.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_16=c16.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_16=c16.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_16=c16.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_16=c16.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_16=c16.filter(c=>c.OFFENSE=='THEFT/OTHER').length

                    //////////////////////                 2017                     //////////////////////////////
                    total_2017=c17.length
                    var arson_17=c17.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_17=c17.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_17=c17.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_17=c17.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_17=c17.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_17=c17.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_17=c17.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_17=c17.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_17=c17.filter(c=>c.OFFENSE=='THEFT/OTHER').length

                    ///////////////////////                 2018                     //////////////////////////////
                    total_2018=c18.length
                    var arson_18=c18.filter(c=>c.OFFENSE=='ARSON').length
                    var assault_weapon_18=c18.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON').length
                    var burglary_18=c18.filter(c=>c.OFFENSE=='BURGLARY').length
                    var homicide_18=c18.filter(c=>c.OFFENSE=='HOMICIDE').length
                    var vehicle_theft_18=c18.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT').length
                    var robbery_18=c18.filter(c=>c.OFFENSE=='ROBBERY').length
                    var sex_abuse_18=c18.filter(c=>c.OFFENSE=='SEX ABUSE').length
                    var auto_theft_18=c18.filter(c=>c.OFFENSE=='THEFT F/AUTO').length
                    var theft_other_18=c18.filter(c=>c.OFFENSE=='THEFT/OTHER').length



                    var data = [{
                        type: "sunburst",
                        labels: [
                            "Year 2014","Year 2015","Year 2016","Year 2017","Year 2018",//parent labels
                            "ARSON","ASSAULT W/DANGEROUS WEAPON","BURGLARY","HOMICIDE","MOTOR VEHICLE THEFT","ROBBERY","SEX ABUSE", "THEFT F/AUTO","THEFT/OTHER",//2014 labels
                            "ARSON","ASSAULT W/DANGEROUS WEAPON","BURGLARY","HOMICIDE","MOTOR VEHICLE THEFT","ROBBERY","SEX ABUSE", "THEFT F/AUTO","THEFT/OTHER",//2015 labels
                            "ARSON","ASSAULT W/DANGEROUS WEAPON","BURGLARY","HOMICIDE","MOTOR VEHICLE THEFT","ROBBERY","SEX ABUSE", "THEFT F/AUTO","THEFT/OTHER",//2016 labels
                            "ARSON","ASSAULT W/DANGEROUS WEAPON","BURGLARY","HOMICIDE","MOTOR VEHICLE THEFT","ROBBERY","SEX ABUSE", "THEFT F/AUTO","THEFT/OTHER",//2017 labels
                            "ARSON","ASSAULT W/DANGEROUS WEAPON","BURGLARY","HOMICIDE","MOTOR VEHICLE THEFT","ROBBERY","SEX ABUSE", "THEFT F/AUTO","THEFT/OTHER" //2018 labels
                        ],
                        parents: [
                            "","","","","",
                            "Year 2014","Year 2014","Year 2014","Year 2014","Year 2014","Year 2014","Year 2014","Year 2014","Year 2014",
                            "Year 2015","Year 2015","Year 2015","Year 2015","Year 2015","Year 2015","Year 2015","Year 2015","Year 2015",
                            "Year 2016","Year 2016","Year 2016","Year 2016","Year 2016","Year 2016","Year 2016","Year 2016","Year 2016",
                            "Year 2017","Year 2017","Year 2017","Year 2017","Year 2017","Year 2017","Year 2017","Year 2017","Year 2017",
                            "Year 2018","Year 2018","Year 2018","Year 2018","Year 2018","Year 2018","Year 2018","Year 2018","Year 2018"
                        ],
                        values:  [total_2014,total_2015,total_2016,total_2017,total_2018,//parent values(inner circle)
                                    arson_14,assault_weapon_14,burglary_14,homicide_14,vehicle_theft_14,robbery_14,sex_abuse_14,auto_theft_14,theft_other_14, // 2014 offenses values
                                    arson_15,assault_weapon_15,burglary_15,homicide_15,vehicle_theft_15,robbery_15,sex_abuse_15,auto_theft_15,theft_other_15, // 2015 offenses values
                                    arson_16,assault_weapon_16,burglary_16,homicide_16,vehicle_theft_16,robbery_16,sex_abuse_16,auto_theft_16,theft_other_16, // 2016 offenses values
                                    arson_17,assault_weapon_17,burglary_17,homicide_17,vehicle_theft_17,robbery_17,sex_abuse_17,auto_theft_17,theft_other_17, // 2017 offenses  values
                                    arson_18,assault_weapon_18,burglary_18,homicide_18,vehicle_theft_18,robbery_18,sex_abuse_18,auto_theft_18,theft_other_18  // 2018 offenses  values
                                ],
                        outsidetextfont: {size: 20, color: "#377eb8"},
                        leaf: {opacity: 0.6},
                        marker: {line: {width: 4}},
                        text:[total_2014,total_2015,total_2016,total_2017,total_2018,//parent values(inner circle)
                            arson_14,assault_weapon_14,burglary_14,homicide_14,vehicle_theft_14,robbery_14,sex_abuse_14,auto_theft_14,theft_other_14, // 2014 offenses values
                            arson_15,assault_weapon_15,burglary_15,homicide_15,vehicle_theft_15,robbery_15,sex_abuse_15,auto_theft_15,theft_other_15, // 2015 offenses values
                            arson_16,assault_weapon_16,burglary_16,homicide_16,vehicle_theft_16,robbery_16,sex_abuse_16,auto_theft_16,theft_other_16, // 2016 offenses values
                            arson_17,assault_weapon_17,burglary_17,homicide_17,vehicle_theft_17,robbery_17,sex_abuse_17,auto_theft_17,theft_other_17, // 2017 offenses  values
                            arson_18,assault_weapon_18,burglary_18,homicide_18,vehicle_theft_18,robbery_18,sex_abuse_18,auto_theft_18,theft_other_18  // 2018 offenses  values
                        ]
                      }];
                      
                      var layout = {
                        margin: {l: 0, r: 0, b: 10, t: 10},
                      };
                      
                      
                      Plotly.newPlot('sunburst1', data, layout,{responsive: true});
                      Plotly.newPlot('sunburst2', data, layout,{responsive: true});
                      Plotly.newPlot('sunburst3', data, layout,{responsive: true});





                });

            });
        });

    });

});




















