
var crime_2014="/static/crime_json/crime_2014.json";
var crime_2015="/static/crime_json/crime_2015.json";
var crime_2016="/static/crime_json/crime_2016.json";
var crime_2017="/static/crime_json/crime_2017.json";
var crime_2018="/static/crime_json/crime_2018.json";



d3.json(crime_2014).then(function(c14){
    d3.json(crime_2015).then(function(c15){
        d3.json(crime_2016).then(function(c16){
            d3.json(crime_2017).then(function(c17){
                d3.json(crime_2018).then(function(c18){

                  
                    function compare(a, b) {
                        const caseA = a.hour;
                        const caseB = b.hour;
                        
                        let comparison = 0;
                        if (caseA > caseB) {
                            comparison = 1;
                        } else if (caseA < caseB) {
                            comparison = -1;
                        }
                        return comparison * 1;
                    }
                     

                    var arson_14=c14.filter(c=>c.OFFENSE=='ARSON');
                    var sorted_arson14=arson_14.sort(compare)
                    var assault_weapon_14=c14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON');
                    var burglary_14=c14.filter(c=>c.OFFENSE=='BURGLARY');
                    var homicide_14=c14.filter(c=>c.OFFENSE=='HOMICIDE');
                    var vehicle_theft_14=c14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT');
                    var robbery_14=c14.filter(c=>c.OFFENSE=='ROBBERY');
                    var sex_abuse_14=c14.filter(c=>c.OFFENSE=='SEX ABUSE');
                    var auto_theft_14=c14.filter(c=>c.OFFENSE=='THEFT F/AUTO');
                    var theft_other_14=c14.filter(c=>c.OFFENSE=='THEFT/OTHER');
              
                    var arson_hour_14=sorted_arson14.map(t=>t.TIME);
                    var count_arson_14=sorted_arson14.map(t=>t.count);
                    var assault_hour_14=assault_weapon_14.map(t=>t.TIME);
                    var count_assault_14=assault_weapon_14.map(t=>t.count);
                    var burglary_hour_14=burglary_14.map(t=>t.TIME);
                    var count_burglary_14=burglary_14.map(t=>t.count);
                    var homicide_hour_14=homicide_14.map(t=>t.TIME);
                    var count_homicide_14=homicide_14.map(t=>t.count);
                    var vehicle_theft_hour_14=vehicle_theft_14.map(t=>t.TIME);
                    var count_vehicle_theft_14=vehicle_theft_14.map(t=>t.count);
                    var robbery_hour_14=robbery_14.map(t=>t.TIME);
                    var count_robbery_14=robbery_14.map(t=>t.count);
                    var sex_abuse_hour_14=sex_abuse_14.map(t=>t.TIME);
                    var count_sex_abuse_14=sex_abuse_14.map(t=>t.count);
                    var auto_theft_hour_14=auto_theft_14.map(t=>t.TIME);
                    var count_auto_theft_14=auto_theft_14.map(t=>t.count);
                    var theft_other_hour_14=theft_other_14.map(t=>t.TIME);
                    var count_theft_other_14=theft_other_14.map(t=>t.count);



                    //console.log(c15);
                    var arson_15=c15.filter(c=>c.OFFENSE=='ARSON');
                    var sorted_arson15=arson_15.sort(compare)
                    var assault_weapon_15=c15.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON');
                    var burglary_15=c15.filter(c=>c.OFFENSE=='BURGLARY');
                    var homicide_15=c15.filter(c=>c.OFFENSE=='HOMICIDE');
                    var vehicle_theft_15=c15.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT');
                    var robbery_15=c15.filter(c=>c.OFFENSE=='ROBBERY');
                    var sex_abuse_15=c15.filter(c=>c.OFFENSE=='SEX ABUSE');
                    var auto_theft_15=c15.filter(c=>c.OFFENSE=='THEFT F/AUTO');
                    var theft_other_15=c15.filter(c=>c.OFFENSE=='THEFT/OTHER');

                    var arson_hour_15=sorted_arson15.map(t=>t.TIME);
                    var count_arson_15=sorted_arson15.map(t=>t.count);
                    var assault_hour_15=assault_weapon_15.map(t=>t.TIME);
                    var count_assault_15=assault_weapon_15.map(t=>t.count);
                    var burglary_hour_15=burglary_15.map(t=>t.TIME);
                    var count_burglary_15=burglary_15.map(t=>t.count);
                    var homicide_hour_15=homicide_15.map(t=>t.TIME);
                    var count_homicide_15=homicide_15.map(t=>t.count);
                    var vehicle_theft_hour_15=vehicle_theft_15.map(t=>t.TIME);
                    var count_vehicle_theft_15=vehicle_theft_15.map(t=>t.count);
                    var robbery_hour_15=robbery_15.map(t=>t.TIME);
                    var count_robbery_15=robbery_15.map(t=>t.count);
                    var sex_abuse_hour_15=sex_abuse_15.map(t=>t.TIME);
                    var count_sex_abuse_15=sex_abuse_15.map(t=>t.count);
                    var auto_theft_hour_15=auto_theft_15.map(t=>t.TIME);
                    var count_auto_theft_15=auto_theft_15.map(t=>t.count);
                    var theft_other_hour_15=theft_other_15.map(t=>t.TIME);
                    var count_theft_other_15=theft_other_15.map(t=>t.count);


                    //console.log(c16);
                    var arson_16=c16.filter(c=>c.OFFENSE=='ARSON');
                    var sorted_arson16=arson_16.sort(compare)
                    var assault_weapon_16=c16.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON');
                    var burglary_16=c16.filter(c=>c.OFFENSE=='BURGLARY');
                    var homicide_16=c16.filter(c=>c.OFFENSE=='HOMICIDE');
                    var vehicle_theft_16=c16.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT');
                    var robbery_16=c16.filter(c=>c.OFFENSE=='ROBBERY');
                    var sex_abuse_16=c16.filter(c=>c.OFFENSE=='SEX ABUSE');
                    var auto_theft_16=c16.filter(c=>c.OFFENSE=='THEFT F/AUTO');
                    var theft_other_16=c16.filter(c=>c.OFFENSE=='THEFT/OTHER');

                    var arson_hour_16=sorted_arson16.map(t=>t.TIME);
                    var count_arson_16=sorted_arson16.map(t=>t.count);
                    var assault_hour_16=assault_weapon_16.map(t=>t.TIME);
                    var count_assault_16=assault_weapon_16.map(t=>t.count);
                    var burglary_hour_16=burglary_16.map(t=>t.TIME);
                    var count_burglary_16=burglary_16.map(t=>t.count);
                    var homicide_hour_16=homicide_16.map(t=>t.TIME);
                    var count_homicide_16=homicide_16.map(t=>t.count);
                    var vehicle_theft_hour_16=vehicle_theft_16.map(t=>t.TIME);
                    var count_vehicle_theft_16=vehicle_theft_16.map(t=>t.count);
                    var robbery_hour_16=robbery_16.map(t=>t.TIME);
                    var count_robbery_16=robbery_16.map(t=>t.count);
                    var sex_abuse_hour_16=sex_abuse_16.map(t=>t.TIME);
                    var count_sex_abuse_16=sex_abuse_16.map(t=>t.count);
                    var auto_theft_hour_16=auto_theft_16.map(t=>t.TIME);
                    var count_auto_theft_16=auto_theft_16.map(t=>t.count);
                    var theft_other_hour_16=theft_other_16.map(t=>t.TIME);
                    var count_theft_other_16=theft_other_16.map(t=>t.count);




                    //console.log(c17);
                    var arson_17=c17.filter(c=>c.OFFENSE=='ARSON');
                    var sorted_arson17=arson_17.sort(compare)
                    var assault_weapon_17=c17.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON');
                    var burglary_17=c17.filter(c=>c.OFFENSE=='BURGLARY');
                    var homicide_17=c17.filter(c=>c.OFFENSE=='HOMICIDE');
                    var vehicle_theft_17=c17.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT');
                    var robbery_17=c17.filter(c=>c.OFFENSE=='ROBBERY');
                    var sex_abuse_17=c17.filter(c=>c.OFFENSE=='SEX ABUSE');
                    var auto_theft_17=c17.filter(c=>c.OFFENSE=='THEFT F/AUTO');
                    var theft_other_17=c17.filter(c=>c.OFFENSE=='THEFT/OTHER');

                    var arson_hour_17=sorted_arson17.map(t=>t.TIME);
                    var count_arson_17=sorted_arson17.map(t=>t.count);
                    var assault_hour_17=assault_weapon_17.map(t=>t.TIME);
                    var count_assault_17=assault_weapon_17.map(t=>t.count);
                    var burglary_hour_17=burglary_17.map(t=>t.TIME);
                    var count_burglary_17=burglary_17.map(t=>t.count);
                    var homicide_hour_17=homicide_17.map(t=>t.TIME);
                    var count_homicide_17=homicide_17.map(t=>t.count);
                    var vehicle_theft_hour_17=vehicle_theft_17.map(t=>t.TIME);
                    var count_vehicle_theft_17=vehicle_theft_17.map(t=>t.count);
                    var robbery_hour_17=robbery_17.map(t=>t.TIME);
                    var count_robbery_17=robbery_17.map(t=>t.count);
                    var sex_abuse_hour_17=sex_abuse_17.map(t=>t.TIME);
                    var count_sex_abuse_17=sex_abuse_17.map(t=>t.count);
                    var auto_theft_hour_17=auto_theft_17.map(t=>t.TIME);
                    var count_auto_theft_17=auto_theft_17.map(t=>t.count);
                    var theft_other_hour_17=theft_other_17.map(t=>t.TIME);
                    var count_theft_other_17=theft_other_17.map(t=>t.count);


                    //console.log(c18);
                    var arson_18=c18.filter(c=>c.OFFENSE=='ARSON');
                    var sorted_arson18=arson_18.sort(compare)
                    var assault_weapon_18=c18.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON');
                    var burglary_18=c18.filter(c=>c.OFFENSE=='BURGLARY');
                    var homicide_18=c18.filter(c=>c.OFFENSE=='HOMICIDE');
                    var vehicle_theft_18=c18.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT');
                    var robbery_18=c18.filter(c=>c.OFFENSE=='ROBBERY');
                    var sex_abuse_18=c18.filter(c=>c.OFFENSE=='SEX ABUSE');
                    var auto_theft_18=c18.filter(c=>c.OFFENSE=='THEFT F/AUTO');
                    var theft_other_18=c18.filter(c=>c.OFFENSE=='THEFT/OTHER');

                    var arson_hour_18=sorted_arson18.map(t=>t.TIME);
                    var count_arson_18=sorted_arson18.map(t=>t.count);
                    var assault_hour_18=assault_weapon_18.map(t=>t.TIME);
                    var count_assault_18=assault_weapon_18.map(t=>t.count);
                    var burglary_hour_18=burglary_18.map(t=>t.TIME);
                    var count_burglary_18=burglary_18.map(t=>t.count);
                    var homicide_hour_18=homicide_18.map(t=>t.TIME);
                    var count_homicide_18=homicide_18.map(t=>t.count);
                    var vehicle_theft_hour_18=vehicle_theft_18.map(t=>t.TIME);
                    var count_vehicle_theft_18=vehicle_theft_18.map(t=>t.count);
                    var robbery_hour_18=robbery_18.map(t=>t.TIME);
                    var count_robbery_18=robbery_18.map(t=>t.count);
                    var sex_abuse_hour_18=sex_abuse_18.map(t=>t.TIME);
                    var count_sex_abuse_18=sex_abuse_18.map(t=>t.count);
                    var auto_theft_hour_18=auto_theft_18.map(t=>t.TIME);
                    var count_auto_theft_18=auto_theft_18.map(t=>t.count);
                    var theft_other_hour_18=theft_other_18.map(t=>t.TIME);
                    var count_theft_other_18=theft_other_18.map(t=>t.count);
            


              






                    
                

                //     ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                //     ////////////////////////////////////    P l o t t i n g   G r a p h s  ////////////////////////////////////
                //     ///////////////////////////////////////////////////////////////////////////////////////////////////////////

                   
                    ///////////////////////////////////////  2   0   1   4   /////////////////////////////////////////////////
                    var arson14 = {
                        type: 'bar',
                        x: arson_hour_14,
                        y: count_arson_14,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:true
                                          
                    };
                    
                    var assault14 = {
                        type: 'bar',
                        x:assault_hour_14,
                        y: count_assault_14,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:true
                      
                        
                    };

                    var burglary14 = {
                        type: 'bar',
                        x: burglary_hour_14,
                        y: count_burglary_14,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:true
                        
                    };

                    var homicide14 = {
                        type: 'bar',
                        x: homicide_hour_14,
                        y: count_homicide_14,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:true  
                        
                    };

                    var vehicle_theft14 = {
                        type: 'bar',
                        x: vehicle_theft_hour_14,
                        y: count_vehicle_theft_14,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:true
                       
                    };

                    var robbery14 = {
                        type: 'bar',
                        x: robbery_hour_14,
                        y: count_robbery_14,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:true
                       
                        
                    };

                    var sex_abuse14 = {
                        type: 'bar',
                        x: sex_abuse_hour_14,
                        y: count_sex_abuse_14,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:true
                        
                    
                    };

                    var auto_theft14 = {
                        type: 'bar',
                        x: auto_theft_hour_14,
                        y: count_auto_theft_14,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:true
                    
                    };

                    var theft_other14 = {
                        type: 'bar',
                        x: theft_other_hour_14,
                        y: count_theft_other_14,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:true
                    
                    };

                //     //////////////////////////////////////////////////   2     0     1      5      ////////////////////////////////////
                    var arson15 = {
                        type: 'bar',
                        x: arson_hour_15,
                        y: count_arson_15,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault15 = {
                        type: 'bar',
                        x: assault_hour_15,
                        y: count_assault_15,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary15 = {
                        type: 'bar',
                        x: burglary_hour_15,
                        y: count_burglary_15,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide15 = {
                        type: 'bar',
                        x: homicide_hour_15,
                        y: count_homicide_15,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft15 = {
                        type: 'bar',
                        x: vehicle_theft_hour_15,
                        y: count_vehicle_theft_15,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery15 = {
                        type: 'bar',
                        x: robbery_hour_15,
                        y: count_robbery_15,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse15 = {
                        type: 'bar',
                        x: sex_abuse_hour_15,
                        y: count_sex_abuse_15,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft15 = {
                        type: 'bar',
                        x: auto_theft_hour_15,
                        y: count_auto_theft_15,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other15 = {
                        type: 'bar',
                        x: theft_other_hour_15,
                        y: count_theft_other_15,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };



                //     ///////////////////////////////////////          2    0    1    6   /////////////////////////////////////
                    var arson16 = {
                        type: 'bar',
                        x: arson_hour_16,
                        y: count_arson_16,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault16 = {
                        type: 'bar',
                        x: assault_hour_16,
                        y: count_assault_16,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary16 = {
                        type: 'bar',
                        x: burglary_hour_16,
                        y: count_burglary_16,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide16 = {
                        type: 'bar',
                        x: homicide_hour_16,
                        y: count_homicide_16,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft16 = {
                        type: 'bar',
                        x: vehicle_theft_hour_16,
                        y: count_vehicle_theft_16,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery16 = {
                        type: 'bar',
                        x: robbery_hour_16,
                        y: count_robbery_16,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse16 = {
                        type: 'bar',
                        x: sex_abuse_hour_16,
                        y: count_sex_abuse_16,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft16 = {
                        type: 'bar',
                        x: auto_theft_hour_16,
                        y: count_auto_theft_16,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other16 = {
                        type: 'bar',
                        x: theft_other_hour_16,
                        y: count_theft_other_16,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };
                   

                    
                //     ///////////////////////////////////////          2    0    1    7   /////////////////////////////////////
                    var arson17 = {
                        type: 'bar',
                        x: arson_hour_17,
                        y: count_arson_17,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault17 = {
                        type: 'bar',
                        x: assault_hour_17,
                        y: count_assault_17,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary17 = {
                        type: 'bar',
                        x: burglary_hour_17,
                        y: count_burglary_17,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide17 = {
                        type: 'bar',
                        x: homicide_hour_17,
                        y: count_homicide_17,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft17 = {
                        type: 'bar',
                        x: vehicle_theft_hour_17,
                        y: count_vehicle_theft_17,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery17 = {
                        type: 'bar',
                        x: robbery_hour_17,
                        y: count_robbery_17,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse17 = {
                        type: 'bar',
                        x: sex_abuse_hour_17,
                        y: count_sex_abuse_17,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft17 = {
                        type: 'bar',
                        x: auto_theft_hour_17,
                        y: count_auto_theft_17,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other17 = {
                        type: 'bar',
                        x: theft_other_hour_17,
                        y: count_theft_other_17,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };
                   
                //     ///////////////////////////////////////      2     0    1     8      //////////////////////////////////////
                    var arson18 = {
                        type: 'bar',
                        x: arson_hour_18,
                        y: count_arson_18,
                        xaxis: 'x1',
                        yaxis: 'y1',
                        marker:{color:'#ff00d2'},
                        showlegend: false,
                        visible:false
                    };
                    
                    var assault18 = {
                        type: 'bar',
                        x: assault_hour_18,
                        y: count_assault_18,
                        xaxis: 'x2',
                        yaxis: 'y2',
                        marker:{color:'#c41130'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var burglary18 = {
                        type: 'bar',
                        x: burglary_hour_18,
                        y: count_burglary_18,
                        xaxis: 'x3',
                        yaxis: 'y3',
                        marker:{color:'#ffc107'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var homicide18 = {
                        type: 'bar',
                        x: homicide_hour_18,
                        y: count_homicide_18,
                        xaxis: 'x4',
                        yaxis: 'y4',
                        marker:{color:'#999966'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var vehicle_theft18 = {
                        type: 'bar',
                        x: vehicle_theft_hour_18,
                        y: count_vehicle_theft_18,
                        xaxis: 'x5',
                        yaxis: 'y5',
                        marker:{color:'#339933'},
                        showlegend: false,
                        visible:false
                    };

                    var robbery18 = {
                        type: 'bar',
                        x: robbery_hour_18,
                        y: count_robbery_18,
                        xaxis: 'x6',
                        yaxis: 'y6',
                        marker:{color:'#dc3545'},
                        showlegend: false,
                        visible:false
                        
                    };

                    var sex_abuse18 = {
                        type: 'bar',
                        x: sex_abuse_hour_18,
                        y: count_sex_abuse_18,
                        xaxis: 'x7',
                        yaxis: 'y7',
                        marker:{color:'#600600'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var auto_theft18 = {
                        type: 'bar',
                        x: auto_theft_hour_18,
                        y: count_auto_theft_18,
                        xaxis: 'x8',
                        yaxis: 'y8',
                        marker:{color:'#212529'},
                        showlegend: false,
                        visible:false
                    
                    };

                    var theft_other18 = {
                        type: 'bar',
                        x: theft_other_hour_18,
                        y: count_theft_other_18,
                        xaxis: 'x9',
                        yaxis: 'y9',
                        marker:{color:'#cc9966'},
                        showlegend: false,
                        visible:false
                    
                    };


                    

            

                    var data = [arson14, assault14, burglary14, homicide14, vehicle_theft14, robbery14, sex_abuse14, auto_theft14, theft_other14,
                                arson15, assault15, burglary15, homicide15, vehicle_theft15, robbery15, sex_abuse15, auto_theft15, theft_other15,
                                arson16, assault16, burglary16, homicide16, vehicle_theft16, robbery16, sex_abuse16, auto_theft16, theft_other16,
                                arson17, assault17, burglary17, homicide17, vehicle_theft17, robbery17, sex_abuse17, auto_theft17, theft_other17,
                                arson18, assault18, burglary18, homicide18, vehicle_theft18, robbery18, sex_abuse18, auto_theft18, theft_other18,
                            ];

                    
                    var updatemenus=[{
                        buttons: [   
                            {
                                args: [{visible: [true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label: '2014 ',
                                method: 'update'
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2015',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2016',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true,
                                                false,false,false,false,false,false,false,false,false
                                            ]}],
                                label:'2017',
                                method:'update'
                            
                            },
                            {
                                args: [{visible: [false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                false,false,false,false,false,false,false,false,false,
                                                true,true,true,true,true,true,true,true,true
                                            ]}],
                                label:'2018',
                                method:'update'
                            
                            }
                                        
                        ],
                        direction: 'left',
                        pad: {'r': 10, 't': 10},
                        showactive: true,
                        type: 'buttons',
                        x: 1,
                        xanchor: 'right',
                        y: 1.1,
                        yanchor: 'top',
                        active: 0,
                        bgcolor: "#00FFFF"
                        //font: {color: '#5072a8'} 
                    }];


                    var layout = {
                        updatemenus: updatemenus,

                        xaxis1: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis2: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis3: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis4: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis5: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis6: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis7: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis8: {  autotick: false,
                            tickangle: 45,
                            automargin: true,
                            tickfont: {size: 10}
                        },
                        xaxis9: {title:"Hour of the day",
                            autotick: false,
                            tickangle: 45,
                            tickfont: {size: 10}
                        },
                        
                    
                        annotations: [
                            {
                                text: "ARSON",
                                font: {size: 14, color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.9,
                                y: 1,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "ASSAULT W/DANGEROUS WEAPON",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.3,
                                y: 0.89,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "BURGLARY",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.76,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "HOMICIDE",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.64,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "MOTOR VEHICLE THEFT",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 1.0,
                                y: 0.53,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "ROBBERY",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.41,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "SEX ABUSE",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.2,
                                y: 0.29,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "THEFT F/AUTO",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.01,
                                y: 0.17,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "THEFT/OTHER",
                                font: {size: 14,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.07,
                                y: 0.05,
                                xref: 'paper',
                                yref: 'paper'
                            }
                        ],

                        grid: {rows: 9, columns: 1, pattern: 'independent'},
                        autosize: true,
                        margin: {
                            l: 50,
                            r: 50,
                            b: 50,
                            t: 50,
                            pad: 4
                        }
                    };
            
           
                    Plotly.newPlot('hour1', data, layout,{responsive: true});
                    Plotly.newPlot('hour2', data, layout,{responsive: true});
                    Plotly.newPlot('hour3', data, layout,{responsive: true});




                   
                });

            });

        });


    });

});

