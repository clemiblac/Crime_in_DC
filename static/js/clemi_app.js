
var news_list="/news";
var crime_2014="/crime2014";
var crime_2015="/crime2015";
var crime_2016="/crime2016";
var crime_2017="/crime2017";
var crime_2018="/crime2018";



d3.json(crime_2014).then(function(c14){
    d3.json(crime_2015).then(function(c15){
        d3.json(crime_2016).then(function(c16){
            d3.json(crime_2017).then(function(c17){
                d3.json(crime_2018).then(function(c18){


                    //console.log(c14);
                    console.log(c18);
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////           Creating new object with just date and offense type         ///////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    // function to create new object
                    function omit(obj, props) {
                    props = props instanceof Array ? props : [props]
                    return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
                    }
                
                    /////////////////// S E L E C T    C O L U M N S   O F    I N T E R E ST //////////////////
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
                    //console.log(offense_by_time)

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
                
                
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    //////////////////////////          Pull out hour of the day for entire object         /////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    /////////////////////////////////////////////   2  0  1   4     //////////////////////////////////////
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

                    //console.log(hourly_data_14)

                    //////////////////////////////////////////    2  0  1  5    /////////////////////////////////////////////////////////
                    var hourly_data_15=[]
                    for (var i = 0; i < offense_by_time_15.length; i++){
                        t=offense_by_time_15[i].REPORT_DAT
                        //console.log(t)
                        var hour_15 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_15[i].HOUR = hour_15;
                        //console.log(offense_by_time[i])
                        hourly_data_15.push(offense_by_time_15[i])

                    }

                    ////////////////////////////////////////    2   0   1   6    ///////////////////////////////////////////////////////
                    var hourly_data_16=[]
                    for (var i = 0; i < offense_by_time_16.length; i++){
                        t=offense_by_time_16[i].REPORT_DAT
                        //console.log(t)
                        var hour_16 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_16[i].HOUR = hour_16;
                        //console.log(offense_by_time[i])
                        hourly_data_16.push(offense_by_time_16[i])

                    }

                    ///////////////////////////////////////////    2   0   1   7    //////////////////////////////////////////////////////// 
                    var hourly_data_17=[]
                    for (var i = 0; i < offense_by_time_17.length; i++){
                        t=offense_by_time_17[i].REPORT_DAT
                        //console.log(t)
                        var hour_17 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_17[i].HOUR = hour_17;
                        //console.log(offense_by_time[i])
                        hourly_data_17.push(offense_by_time_17[i])

                    }

                    ////////////////////////////////////////      2    0    1   8    ////////////////////////////////////////////////////////
                    var hourly_data_18=[]
                    for (var i = 0; i < offense_by_time_18.length; i++){
                        t=offense_by_time_18[i].REPORT_DAT
                        //console.log(t)
                        var hour_18 = t.slice(11,13);
                        //console.log(hour)
                        offense_by_time_18[i].HOUR = hour_18;
                        //console.log(offense_by_time[i])
                        hourly_data_18.push(offense_by_time_18[i])

                    }


                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////// A  P  P L  Y  I  N  G      O  F  F  E  N  S  E     F  I  L  T  E  R  S   ///////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    //////////////////////////////////////////      2   0   1   4   ///////////////////////////////////////////////////////////
                    var arson_14=hourly_data_14.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_14=hourly_data_14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_14=hourly_data_14.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_14=hourly_data_14.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_14=hourly_data_14.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_14=hourly_data_14.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_14=hourly_data_14.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////////   2   0   1   5   ///////////////////////////////////////////////////////////
                    var arson_15=hourly_data_15.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_15=hourly_data_15.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_15=hourly_data_15.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_15=hourly_data_15.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_15=hourly_data_15.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_15=hourly_data_15.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_15=hourly_data_15.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_15=hourly_data_15.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_15=hourly_data_15.filter(c=>c.OFFENSE=='THEFT/OTHER')

                    
                    //////////////////////////////////////   2   0   1   6   ////////////////////////////////////////////////////////////////
                    var arson_16=hourly_data_16.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_16=hourly_data_16.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_16=hourly_data_16.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_16=hourly_data_16.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_16=hourly_data_16.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_16=hourly_data_16.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_16=hourly_data_16.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_16=hourly_data_16.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_16=hourly_data_16.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////   2   0   1   7   ////////////////////////////////////////////////////////////////
                    var arson_17=hourly_data_17.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_17=hourly_data_17.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_17=hourly_data_17.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_17=hourly_data_17.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_17=hourly_data_17.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_17=hourly_data_17.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_17=hourly_data_17.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_17=hourly_data_17.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_17=hourly_data_17.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    //////////////////////////////////////   2   0   1   8   ////////////////////////////////////////////////////////////////
                    var arson_18=hourly_data_18.filter(c=>c.OFFENSE=='ARSON')
                    var assault_weapon_18=hourly_data_18.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
                    var burglary_18=hourly_data_18.filter(c=>c.OFFENSE=='BURGLARY')
                    var homicide_18=hourly_data_18.filter(c=>c.OFFENSE=='HOMICIDE')
                    var vehicle_theft_18=hourly_data_18.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
                    var robbery_18=hourly_data_18.filter(c=>c.OFFENSE=='ROBBERY')
                    var sex_abuse_18=hourly_data_18.filter(c=>c.OFFENSE=='SEX ABUSE')
                    var auto_theft_18=hourly_data_18.filter(c=>c.OFFENSE=='THEFT F/AUTO')
                    var theft_other_18=hourly_data_18.filter(c=>c.OFFENSE=='THEFT/OTHER')


                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////  Counting offenses by hour ///////////////////////////////////////////////////

                    ////////////////////////////////////////////   2   0   1   4    ///////////////////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_14=arson_14.map(t=>t.HOUR)
                    var result_arson_14 = {};
                    for(var i = 0; i < time_arson_14.length; ++i) {
                        if(!result_arson_14[time_arson_14[i]])
                        result_arson_14[time_arson_14[i]] = 0;
                        ++result_arson_14[time_arson_14[i]];
                    }
                    result_arson_14["00"] = 0;
                    result_arson_14["21"] = 0;
                    result_arson_14["22"] = 0;
                    result_arson_14["23"] = 0;
                    //console.log(result_arson_14)


                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_14=assault_weapon_14.map(t=>t.HOUR)
                    var result_assault_14 = {};
                    for(var i = 0; i < time_assault_14.length; ++i) {
                        if(!result_assault_14[time_assault_14[i]])
                        result_assault_14[time_assault_14[i]] = 0;
                        ++result_assault_14[time_assault_14[i]];
                    }

                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_14=burglary_14.map(t=>t.HOUR)
                    var result_burglary_14 = {};
                    for(var i = 0; i < time_burglary_14.length; ++i) {
                        if(!result_burglary_14[time_burglary_14[i]])
                        result_burglary_14[time_burglary_14[i]] = 0;
                        ++result_burglary_14[time_burglary_14[i]];
                    }

                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_14=homicide_14.map(t=>t.HOUR)
                    var result_homicide_14 = {};
                    for(var i = 0; i < time_homicide_14.length; ++i) {
                        if(!result_homicide_14[time_homicide_14[i]])
                        result_homicide_14[time_homicide_14[i]] = 0;
                        ++result_homicide_14[time_homicide_14[i]];
                    }
                    result_homicide_14["01"] = 0; result_homicide_14["02"] = 0; result_homicide_14["03"] = 0;
                    result_homicide_14["04"] = 0; result_homicide_14["05"] = 0; result_homicide_14["06"] = 0;
                    result_homicide_14["07"] = 0; result_homicide_14["08"] = 0; result_homicide_14["09"] = 0;
                    result_homicide_14["10"] = 0; result_homicide_14["11"] = 0; result_homicide_14["12"] = 0;
                    result_homicide_14["13"] = 0; result_homicide_14["14"] = 0; result_homicide_14["15"] = 0;
                    result_homicide_14["16"] = 0; result_homicide_14["17"] = 0; result_homicide_14["18"] = 0;
                    result_homicide_14["19"] = 0; result_homicide_14["20"] = 0; result_homicide_14["21"] = 0;
                    result_homicide_14["22"] = 0; result_homicide_14["23"] = 0;

                    //console.log(result_homicide_14)

                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_14=vehicle_theft_14.map(t=>t.HOUR)
                    var result_vehicle_theft_14 = {};
                    for(var i = 0; i < time_vehicle_theft_14.length; ++i) {
                        if(!result_vehicle_theft_14[time_vehicle_theft_14[i]])
                        result_vehicle_theft_14[time_vehicle_theft_14[i]] = 0;
                        ++result_vehicle_theft_14[time_vehicle_theft_14[i]];
                    }

                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_14=robbery_14.map(t=>t.HOUR)
                    var result_robbery_14 = {};
                    for(var i = 0; i < time_robbery_14.length; ++i) {
                        if(!result_robbery_14[time_robbery_14[i]])
                        result_robbery_14[time_robbery_14[i]] = 0;
                        ++result_robbery_14[time_robbery_14[i]];
                    }

                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_14=sex_abuse_14.map(t=>t.HOUR)
                    var result_sex_abuse_14 = {};
                    for(var i = 0; i < time_sex_abuse_14.length; ++i) {
                        if(!result_sex_abuse_14[time_sex_abuse_14[i]])
                        result_sex_abuse_14[time_sex_abuse_14[i]] = 0;
                        ++result_sex_abuse_14[time_sex_abuse_14[i]];
                    }

                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_14=auto_theft_14.map(t=>t.HOUR)
                    var result_auto_theft_14 = {};
                    for(var i = 0; i < time_auto_theft_14.length; ++i) {
                        if(!result_auto_theft_14[time_auto_theft_14[i]])
                        result_auto_theft_14[time_auto_theft_14[i]] = 0;
                        ++result_auto_theft_14[time_auto_theft_14[i]];
                    }
                    
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_14=theft_other_14.map(t=>t.HOUR)
                    var result_theft_other_14 = {};
                    for(var i = 0; i < time_theft_other_14.length; ++i) {
                        if(!result_theft_other_14[time_theft_other_14[i]])
                        result_theft_other_14[time_theft_other_14[i]] = 0;
                        ++result_theft_other_14[time_theft_other_14[i]];
                    }


                    
                    ////////////////////////////////////////////   2   0   1   5    ///////////////////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_15=arson_15.map(t=>t.HOUR)
                    var result_arson_15 = {};
                    for(var i = 0; i < time_arson_15.length; ++i) {
                        if(!result_arson_15[time_arson_15[i]])
                        result_arson_15[time_arson_15[i]] = 0;
                        ++result_arson_15[time_arson_15[i]];
                    }


                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_15=assault_weapon_15.map(t=>t.HOUR)
                    var result_assault_15 = {};
                    for(var i = 0; i < time_assault_15.length; ++i) {
                        if(!result_assault_15[time_assault_15[i]])
                        result_assault_15[time_assault_15[i]] = 0;
                        ++result_assault_15[time_assault_15[i]];
                    }

                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_15=burglary_15.map(t=>t.HOUR)
                    var result_burglary_15 = {};
                    for(var i = 0; i < time_burglary_15.length; ++i) {
                        if(!result_burglary_15[time_burglary_15[i]])
                        result_burglary_15[time_burglary_15[i]] = 0;
                        ++result_burglary_15[time_burglary_15[i]];
                    }

                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_15=homicide_15.map(t=>t.HOUR)
                    var result_homicide_15 = {};
                    for(var i = 0; i < time_homicide_15.length; ++i) {
                        if(!result_homicide_15[time_homicide_15[i]])
                        result_homicide_15[time_homicide_15[i]] = 0;
                        ++result_homicide_15[time_homicide_15[i]];
                    }
                  

                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_15=vehicle_theft_15.map(t=>t.HOUR)
                    var result_vehicle_theft_15 = {};
                    for(var i = 0; i < time_vehicle_theft_15.length; ++i) {
                        if(!result_vehicle_theft_15[time_vehicle_theft_15[i]])
                        result_vehicle_theft_15[time_vehicle_theft_15[i]] = 0;
                        ++result_vehicle_theft_15[time_vehicle_theft_15[i]];
                    }

                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_15=robbery_15.map(t=>t.HOUR)
                    var result_robbery_15 = {};
                    for(var i = 0; i < time_robbery_15.length; ++i) {
                        if(!result_robbery_15[time_robbery_15[i]])
                        result_robbery_15[time_robbery_15[i]] = 0;
                        ++result_robbery_15[time_robbery_15[i]];
                    }

                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_15=sex_abuse_15.map(t=>t.HOUR)
                    var result_sex_abuse_15 = {};
                    for(var i = 0; i < time_sex_abuse_15.length; ++i) {
                        if(!result_sex_abuse_15[time_sex_abuse_15[i]])
                        result_sex_abuse_15[time_sex_abuse_15[i]] = 0;
                        ++result_sex_abuse_15[time_sex_abuse_15[i]];
                    }

                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_15=auto_theft_15.map(t=>t.HOUR)
                    var result_auto_theft_15 = {};
                    for(var i = 0; i < time_auto_theft_15.length; ++i) {
                        if(!result_auto_theft_15[time_auto_theft_15[i]])
                        result_auto_theft_15[time_auto_theft_15[i]] = 0;
                        ++result_auto_theft_15[time_auto_theft_15[i]];
                    }
                    
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_15=theft_other_15.map(t=>t.HOUR)
                    var result_theft_other_15 = {};
                    for(var i = 0; i < time_theft_other_15.length; ++i) {
                        if(!result_theft_other_15[time_theft_other_15[i]])
                        result_theft_other_15[time_theft_other_15[i]] = 0;
                        ++result_theft_other_15[time_theft_other_15[i]];
                    }

                    ///////////////////////////////////////////////////    2   0   1   6   ///////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_16=arson_16.map(t=>t.HOUR)
                    var result_arson_16 = {};
                    for(var i = 0; i < time_arson_16.length; ++i) {
                        if(!result_arson_16[time_arson_16[i]])
                        result_arson_16[time_arson_16[i]] = 0;
                        ++result_arson_16[time_arson_16[i]];
                    }


                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_16=assault_weapon_16.map(t=>t.HOUR)
                    var result_assault_16 = {};
                    for(var i = 0; i < time_assault_16.length; ++i) {
                        if(!result_assault_16[time_assault_16[i]])
                        result_assault_16[time_assault_16[i]] = 0;
                        ++result_assault_16[time_assault_16[i]];
                    }

                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_16=burglary_16.map(t=>t.HOUR)
                    var result_burglary_16 = {};
                    for(var i = 0; i < time_burglary_16.length; ++i) {
                        if(!result_burglary_16[time_burglary_16[i]])
                        result_burglary_16[time_burglary_16[i]] = 0;
                        ++result_burglary_16[time_burglary_16[i]];
                    }

                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_16=homicide_16.map(t=>t.HOUR)
                    var result_homicide_16 = {};
                    for(var i = 0; i < time_homicide_16.length; ++i) {
                        if(!result_homicide_16[time_homicide_16[i]])
                        result_homicide_16[time_homicide_16[i]] = 0;
                        ++result_homicide_16[time_homicide_16[i]];
                    }
                  

                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_16=vehicle_theft_16.map(t=>t.HOUR)
                    var result_vehicle_theft_16 = {};
                    for(var i = 0; i < time_vehicle_theft_16.length; ++i) {
                        if(!result_vehicle_theft_16[time_vehicle_theft_16[i]])
                        result_vehicle_theft_16[time_vehicle_theft_16[i]] = 0;
                        ++result_vehicle_theft_16[time_vehicle_theft_16[i]];
                    }

                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_16=robbery_16.map(t=>t.HOUR)
                    var result_robbery_16 = {};
                    for(var i = 0; i < time_robbery_16.length; ++i) {
                        if(!result_robbery_16[time_robbery_16[i]])
                        result_robbery_16[time_robbery_16[i]] = 0;
                        ++result_robbery_16[time_robbery_16[i]];
                    }

                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_16=sex_abuse_16.map(t=>t.HOUR)
                    var result_sex_abuse_16 = {};
                    for(var i = 0; i < time_sex_abuse_16.length; ++i) {
                        if(!result_sex_abuse_16[time_sex_abuse_16[i]])
                        result_sex_abuse_16[time_sex_abuse_16[i]] = 0;
                        ++result_sex_abuse_16[time_sex_abuse_16[i]];
                    }

                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_16=auto_theft_16.map(t=>t.HOUR)
                    var result_auto_theft_16 = {};
                    for(var i = 0; i < time_auto_theft_16.length; ++i) {
                        if(!result_auto_theft_16[time_auto_theft_16[i]])
                        result_auto_theft_16[time_auto_theft_16[i]] = 0;
                        ++result_auto_theft_16[time_auto_theft_16[i]];
                    }
                    
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_16=theft_other_16.map(t=>t.HOUR)
                    var result_theft_other_16 = {};
                    for(var i = 0; i < time_theft_other_16.length; ++i) {
                        if(!result_theft_other_16[time_theft_other_16[i]])
                        result_theft_other_16[time_theft_other_16[i]] = 0;
                        ++result_theft_other_16[time_theft_other_16[i]];
                    }

                    //////////////////////////////////////////   2   0   1   7   ///////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_17=arson_17.map(t=>t.HOUR)
                    var result_arson_17 = {};
                    for(var i = 0; i < time_arson_17.length; ++i) {
                        if(!result_arson_17[time_arson_17[i]])
                        result_arson_17[time_arson_17[i]] = 0;
                        ++result_arson_17[time_arson_17[i]];
                    }

      
                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_17=assault_weapon_17.map(t=>t.HOUR)
                    var result_assault_17 = {};
                    for(var i = 0; i < time_assault_17.length; ++i) {
                        if(!result_assault_17[time_assault_17[i]])
                        result_assault_17[time_assault_17[i]] = 0;
                        ++result_assault_17[time_assault_17[i]];
                    }
      
                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_17=burglary_17.map(t=>t.HOUR)
                    var result_burglary_17 = {};
                    for(var i = 0; i < time_burglary_17.length; ++i) {
                        if(!result_burglary_17[time_burglary_17[i]])
                        result_burglary_17[time_burglary_17[i]] = 0;
                        ++result_burglary_17[time_burglary_17[i]];
                    }
      
                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_17=homicide_17.map(t=>t.HOUR)
                    var result_homicide_17 = {};
                    for(var i = 0; i < time_homicide_17.length; ++i) {
                        if(!result_homicide_17[time_homicide_17[i]])
                        result_homicide_17[time_homicide_17[i]] = 0;
                        ++result_homicide_17[time_homicide_17[i]];
                    }
                        
      
                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_17=vehicle_theft_17.map(t=>t.HOUR)
                    var result_vehicle_theft_17 = {};
                    for(var i = 0; i < time_vehicle_theft_17.length; ++i) {
                        if(!result_vehicle_theft_17[time_vehicle_theft_17[i]])
                        result_vehicle_theft_17[time_vehicle_theft_17[i]] = 0;
                        ++result_vehicle_theft_17[time_vehicle_theft_17[i]];
                    }
      
                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_17=robbery_17.map(t=>t.HOUR)
                    var result_robbery_17 = {};
                    for(var i = 0; i < time_robbery_17.length; ++i) {
                        if(!result_robbery_17[time_robbery_17[i]])
                        result_robbery_17[time_robbery_17[i]] = 0;
                        ++result_robbery_17[time_robbery_17[i]];
                    }
      
                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_17=sex_abuse_17.map(t=>t.HOUR)
                    var result_sex_abuse_17 = {};
                    for(var i = 0; i < time_sex_abuse_17.length; ++i) {
                        if(!result_sex_abuse_17[time_sex_abuse_17[i]])
                        result_sex_abuse_17[time_sex_abuse_17[i]] = 0;
                        ++result_sex_abuse_17[time_sex_abuse_17[i]];
                    }
      
                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_17=auto_theft_17.map(t=>t.HOUR)
                    var result_auto_theft_17 = {};
                    for(var i = 0; i < time_auto_theft_17.length; ++i) {
                        if(!result_auto_theft_17[time_auto_theft_17[i]])
                        result_auto_theft_17[time_auto_theft_17[i]] = 0;
                        ++result_auto_theft_17[time_auto_theft_17[i]];
                    }
                          
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_17=theft_other_17.map(t=>t.HOUR)
                    var result_theft_other_17 = {};
                    for(var i = 0; i < time_theft_other_17.length; ++i) {
                        if(!result_theft_other_17[time_theft_other_17[i]])
                        result_theft_other_16[time_theft_other_17[i]] = 0;
                        ++result_theft_other_16[time_theft_other_17[i]];
                    }

                    /////////////////////////////////////    2   0  1   8    //////////////////////////////////////////////////////////
                    ///\\\ ARSON by hour///\\\
                    var time_arson_18=arson_18.map(t=>t.HOUR)
                    var result_arson_18 = {};
                    for(var i = 0; i < time_arson_18.length; ++i) {
                        if(!result_arson_18[time_arson_18[i]])
                        result_arson_18[time_arson_18[i]] = 0;
                        ++result_arson_18[time_arson_18[i]];
                    }
       
                    ///\\\ ASSAULT W/DANGEROUS WEAPON by hour///\\\
                    var time_assault_18=assault_weapon_18.map(t=>t.HOUR)
                    var result_assault_18 = {};
                    for(var i = 0; i < time_assault_18.length; ++i) {
                         if(!result_assault_18[time_assault_18[i]])
                         result_assault_18[time_assault_18[i]] = 0;
                         ++result_assault_18[time_assault_18[i]];
                    }
       
                    ///\\\ BURGLARY by hour///\\\
                    var time_burglary_18=burglary_18.map(t=>t.HOUR)
                    var result_burglary_18 = {};
                    for(var i = 0; i < time_burglary_18.length; ++i) {
                        if(!result_burglary_18[time_burglary_18[i]])
                        result_burglary_18[time_burglary_18[i]] = 0;
                        ++result_burglary_18[time_burglary_18[i]];
                    }
       
                    ///\\\ HOMICIDE by hour///\\\
                    var time_homicide_18=homicide_18.map(t=>t.HOUR)
                    var result_homicide_18 = {};
                    for(var i = 0; i < time_homicide_18.length; ++i) {
                        if(!result_homicide_18[time_homicide_18[i]])
                        result_homicide_18[time_homicide_18[i]] = 0;
                        ++result_homicide_18[time_homicide_18[i]];
                    }
                         
                    ///\\\ MOTOR VEHICLE THEFT by hour///\\
                    var time_vehicle_theft_18=vehicle_theft_18.map(t=>t.HOUR)
                    var result_vehicle_theft_18 = {};
                    for(var i = 0; i < time_vehicle_theft_18.length; ++i) {
                        if(!result_vehicle_theft_18[time_vehicle_theft_18[i]])
                        result_vehicle_theft_18[time_vehicle_theft_18[i]] = 0;
                        ++result_vehicle_theft_18[time_vehicle_theft_18[i]];
                    }
       
                    ///\\\ ROBBERY by hour///\\
                    var time_robbery_18=robbery_18.map(t=>t.HOUR)
                    var result_robbery_18 = {};
                    for(var i = 0; i < time_robbery_18.length; ++i) {
                        if(!result_robbery_18[time_robbery_18[i]])
                        result_robbery_18[time_robbery_18[i]] = 0;
                        ++result_robbery_18[time_robbery_18[i]];
                    }
       
                    ///\\\ SEX ABUSE by hour///\\
                    var time_sex_abuse_18=sex_abuse_18.map(t=>t.HOUR)
                    var result_sex_abuse_18 = {};
                    for(var i = 0; i < time_sex_abuse_18.length; ++i) {
                        if(!result_sex_abuse_18[time_sex_abuse_18[i]])
                        result_sex_abuse_18[time_sex_abuse_18[i]] = 0;
                        ++result_sex_abuse_18[time_sex_abuse_18[i]];
                    }
       
                    ///\\\ THEFT F/AUTO by hour///\\
                    var time_auto_theft_18=auto_theft_18.map(t=>t.HOUR)
                    var result_auto_theft_18 = {};
                    for(var i = 0; i < time_auto_theft_18.length; ++i) {
                        if(!result_auto_theft_18[time_auto_theft_18[i]])
                        result_auto_theft_18[time_auto_theft_18[i]] = 0;
                        ++result_auto_theft_18[time_auto_theft_18[i]];
                    }
                           
                    ///\\\ THEFT OTHER by hour///\\
                    var time_theft_other_18=theft_other_18.map(t=>t.HOUR)
                    var result_theft_other_18 = {};
                    for(var i = 0; i < time_theft_other_18.length; ++i) {
                        if(!result_theft_other_18[time_theft_other_18[i]])
                        result_theft_other_18[time_theft_other_18[i]] = 0;
                        ++result_theft_other_18[time_theft_other_18[i]];
                    }


                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    /////////////////////////////////////      Declaring plot variables         ////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    /////////////////////////////////////           2   0   1   4   ////////////////////////////////////////////////
                    var arson_hour_14=Object.keys(result_arson_14);
                    var count_arson_14=Object.values(result_arson_14);

                    var assault_hour_14=Object.keys(result_assault_14);
                    var count_assault_14=Object.values(result_assault_14);

                    var burglary_hour_14=Object.keys(result_burglary_14);
                    var count_burglary_14=Object.values(result_burglary_14);

                    var homicide_hour_14=Object.keys(result_homicide_14);
                    var count_homicide_14=Object.values(result_homicide_14);

                    var vehicle_theft_hour_14=Object.keys(result_vehicle_theft_14);
                    var count_vehicle_theft_14=Object.values(result_vehicle_theft_14);

                    var robbery_hour_14=Object.keys(result_robbery_14);
                    var count_robbery_14=Object.values(result_robbery_14);

                    var sex_abuse_hour_14=Object.keys(result_sex_abuse_14);
                    var count_sex_abuse_14=Object.values(result_sex_abuse_14);

                    var auto_theft_hour_14=Object.keys(result_auto_theft_14);
                    var count_auto_theft_14=Object.values(result_auto_theft_14);

                    var theft_other_hour_14=Object.keys(result_theft_other_14);
                    var count_theft_other_14=Object.values(result_theft_other_14);



                    ///////////////////////////////////////  2   0   1   5   ///////////////////////////////////////////////////////////
                    var arson_hour_15=Object.keys(result_arson_15);
                    var count_arson_15=Object.values(result_arson_15);

                    var assault_hour_15=Object.keys(result_assault_15);
                    var count_assault_15=Object.values(result_assault_15);

                    var burglary_hour_15=Object.keys(result_burglary_15);
                    var count_burglary_15=Object.values(result_burglary_15);

                    var homicide_hour_15=Object.keys(result_homicide_15);
                    var count_homicide_15=Object.values(result_homicide_15);

                    var vehicle_theft_hour_15=Object.keys(result_vehicle_theft_15);
                    var count_vehicle_theft_15=Object.values(result_vehicle_theft_15);

                    var robbery_hour_15=Object.keys(result_robbery_15);
                    var count_robbery_15=Object.values(result_robbery_15);

                    var sex_abuse_hour_15=Object.keys(result_sex_abuse_15);
                    var count_sex_abuse_15=Object.values(result_sex_abuse_15);

                    var auto_theft_hour_15=Object.keys(result_auto_theft_15);
                    var count_auto_theft_15=Object.values(result_auto_theft_15);

                    var theft_other_hour_15=Object.keys(result_theft_other_15);
                    var count_theft_other_15=Object.values(result_theft_other_15);


                    
                    ///////////////////////////////////////  2   0   1   6   ///////////////////////////////////////////////////////////
                    var arson_hour_16=Object.keys(result_arson_16);
                    var count_arson_16=Object.values(result_arson_16);

                    var assault_hour_16=Object.keys(result_assault_16);
                    var count_assault_16=Object.values(result_assault_16);

                    var burglary_hour_16=Object.keys(result_burglary_16);
                    var count_burglary_16=Object.values(result_burglary_16);

                    var homicide_hour_16=Object.keys(result_homicide_16);
                    var count_homicide_16=Object.values(result_homicide_16);

                    var vehicle_theft_hour_16=Object.keys(result_vehicle_theft_16);
                    var count_vehicle_theft_16=Object.values(result_vehicle_theft_16);

                    var robbery_hour_16=Object.keys(result_robbery_16);
                    var count_robbery_16=Object.values(result_robbery_16);

                    var sex_abuse_hour_16=Object.keys(result_sex_abuse_16);
                    var count_sex_abuse_16=Object.values(result_sex_abuse_16);

                    var auto_theft_hour_16=Object.keys(result_auto_theft_16);
                    var count_auto_theft_16=Object.values(result_auto_theft_16);

                    var theft_other_hour_16=Object.keys(result_theft_other_16);
                    var count_theft_other_16=Object.values(result_theft_other_16);


                    ///////////////////////////////////////  2   0   1   7   ///////////////////////////////////////////////////////////
                    var arson_hour_17=Object.keys(result_arson_17);
                    var count_arson_17=Object.values(result_arson_17);

                    var assault_hour_17=Object.keys(result_assault_17);
                    var count_assault_17=Object.values(result_assault_17);

                    var burglary_hour_17=Object.keys(result_burglary_17);
                    var count_burglary_17=Object.values(result_burglary_17);

                    var homicide_hour_17=Object.keys(result_homicide_17);
                    var count_homicide_17=Object.values(result_homicide_17);

                    var vehicle_theft_hour_17=Object.keys(result_vehicle_theft_17);
                    var count_vehicle_theft_17=Object.values(result_vehicle_theft_17);

                    var robbery_hour_17=Object.keys(result_robbery_17);
                    var count_robbery_17=Object.values(result_robbery_17);

                    var sex_abuse_hour_17=Object.keys(result_sex_abuse_17);
                    var count_sex_abuse_17=Object.values(result_sex_abuse_17);

                    var auto_theft_hour_17=Object.keys(result_auto_theft_17);
                    var count_auto_theft_17=Object.values(result_auto_theft_17);

                    var theft_other_hour_17=Object.keys(result_theft_other_17);
                    var count_theft_other_17=Object.values(result_theft_other_17);

                    
                    ///////////////////////////////////////  2   0   1   8   ///////////////////////////////////////////////////////////
                    var arson_hour_18=Object.keys(result_arson_18);
                    var count_arson_18=Object.values(result_arson_18);

                    var assault_hour_18=Object.keys(result_assault_18);
                    var count_assault_18=Object.values(result_assault_18);

                    var burglary_hour_18=Object.keys(result_burglary_18);
                    var count_burglary_18=Object.values(result_burglary_18);

                    var homicide_hour_18=Object.keys(result_homicide_18);
                    var count_homicide_18=Object.values(result_homicide_18);

                    var vehicle_theft_hour_18=Object.keys(result_vehicle_theft_18);
                    var count_vehicle_theft_18=Object.values(result_vehicle_theft_18);

                    var robbery_hour_18=Object.keys(result_robbery_18);
                    var count_robbery_18=Object.values(result_robbery_18);

                    var sex_abuse_hour_18=Object.keys(result_sex_abuse_18);
                    var count_sex_abuse_18=Object.values(result_sex_abuse_18);

                    var auto_theft_hour_18=Object.keys(result_auto_theft_18);
                    var count_auto_theft_18=Object.values(result_auto_theft_18);

                    var theft_other_hour_18=Object.keys(result_theft_other_18);
                    var count_theft_other_18=Object.values(result_theft_other_18);

                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////    P l o t t i n g   G r a p h s  ////////////////////////////////////
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

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
                        x: assault_hour_14,
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

                    //////////////////////////////////////////////////   2     0     1      5      ////////////////////////////////////
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




                    ///////////////////////////////////////          2    0    1    6   /////////////////////////////////////
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
                   

                    
                    ///////////////////////////////////////          2    0    1    7   /////////////////////////////////////
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
                   
                    ///////////////////////////////////////      2     0    1     8      //////////////////////////////////////
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
                        x: 0.15,
                        xanchor: 'left',
                        y: 1.1,
                        yanchor: 'top' 
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
                        //yaxis: {title:"count of incidents",automargin: true,},
                        //yaxis2:{title:"Total", automargin:true},
                    
                        annotations: [
                            {
                                text: "Arson",
                                font: {size: 16, color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.2,
                                y: 1,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "Assault",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.89,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "Burglary",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.76,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "Homicide",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.66,
                                xref: 'paper',
                                yref: 'paper'
                            },
                            {
                                text: "Vehicle Theft",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 1.0,
                                y: 0.53,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "Robbery",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.41,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "Sex Abuse",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.13,
                                y: 0.28,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "Auto Theft",
                                font: {size: 16,color: 'black'},
                                showarrow: false,
                                align: 'center',
                                x: 0.01,
                                y: 0.17,
                                xref: 'paper',
                                yref: 'paper'
                            }, {
                                text: "Theft Other",
                                font: {size: 16,color: 'black'},
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
                        width: 450,
                        height: 1000,
                        margin: {
                            l: 100,
                            r: 50,
                            b: 50,
                            t: 50,
                            pad: 4
                        }
                    };
            
           
                    Plotly.newPlot('hour', data, layout);

                });

            });

        });


    });

});





