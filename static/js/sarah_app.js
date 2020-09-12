
    var crime2010 = "/crime2010";
    var crime2011 = "/crime2011";
    var crime2012 = "/crime2012";
    var crime2013 = "/crime2013";
    var crime2014 = "/crime2014";
    var crime2015 = "/crime2015";
    var crime2016 = "/crime2016";
    var crime2017 = "/crime2017";
    var crime2018 = "/crime2018";
    var crime2019 = "/crime2019";
    var unemployment = "/unemployment";


d3.json(crime2010).then(function(c10){        
    d3.json(crime2011).then(function(c11){    
        d3.json(crime2012).then(function(c12){          
            d3.json(crime2013).then(function(c13){    
                d3.json(crime2014).then(function(c14){
                    d3.json(crime2015).then(function(c15){
                        d3.json(crime2016).then(function(c16){
                            d3.json(crime2017).then(function(c17){
                                d3.json(crime2018).then(function(c18){
                                    d3.json(crime2019).then(function(c19){
                                        d3.json(unemployment).then(function(u1){


                                            
                                        // function to create new object
                                            
                                        function omit(obj, props) {
                                        props = props instanceof Array ? props : [props]
                                        return eval(`(({${props.join(',')}, ...o}) => o)(obj)`)
                                            }



///////////////////                  2010                ////////////////                                            

var offense_in_10=[];


for (var i = 0; i < c10.length; i++){
const obj=c10[i]
const offense_10 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
            'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
            'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
            'YBLOCK','XBLOCK'])

offense_in_10.push(offense_10)
    }
    var len_10 = offense_in_10.length; 
    // console.log("2010 crime total " + len_10)

    var arson_10=offense_in_10.filter(c=>c.OFFENSE=='ARSON')
    var assault_weapon_10=offense_in_10.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
    var burglary_10=offense_in_10.filter(c=>c.OFFENSE=='BURGLARY')
    var homicide_10=offense_in_10.filter(c=>c.OFFENSE=='HOMICIDE')
    var vehicle_theft_10=offense_in_10.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
    var robbery_10=offense_in_10.filter(c=>c.OFFENSE=='ROBBERY')
    var sex_abuse_10=offense_in_10.filter(c=>c.OFFENSE=='SEX ABUSE')
    var auto_theft_10=offense_in_10.filter(c=>c.OFFENSE=='THEFT F/AUTO')
    var theft_other_10=offense_in_10.filter(c=>c.OFFENSE=='THEFT/OTHER')

    var len_arson_10 = arson_10.length;
    var len_assault_weapon_10 = assault_weapon_10.length;
    var len_burgulary_10 = burglary_10.length;
    var len_homicide_10 = homicide_10.length;
    var len_vehicle_theft_10 = vehicle_theft_10.length;
    var len_robbery_10 = robbery_10.length;
    var len_sex_abuse_10 = sex_abuse_10.length; 
    var len_auto_theft_10 = auto_theft_10.length;
    var len_theft_other_10 = theft_other_10.length;
    
    // console.log("arson 10 " + len_arson_10);
    // console.log("assault_weapon 10 " + len_assault_weapon_10);
    // console.log("burgulary 10 " + len_burgulary_10);
    // console.log("homicide 10 " + len_homicide_10);
    // console.log("vehicle theft 10 " + len_vehicle_theft_10);
    // console.log("robbery 10 " + len_robbery_10);
    // console.log("sex_abuse 10 " + len_sex_abuse_10);
    // console.log("auto theft 10 " + len_auto_theft_10);
    // console.log("theft other 10  " + len_theft_other_10);


///////////////////                  2011                ////////////////

var offense_in_11=[];

for (var i = 0; i < c11.length; i++){
    const obj=c11[i]
    const offense_11 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])

    offense_in_11.push(offense_11)
}

var len_11 = offense_in_11.length; 
// console.log("2011 crime total " + len_11)

var arson_11=offense_in_11.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_11=offense_in_11.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_11=offense_in_11.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_11=offense_in_11.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_11=offense_in_11.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_11=offense_in_11.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_11=offense_in_11.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_11=offense_in_11.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_11=offense_in_11.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_11 = arson_11.length;
var len_assault_weapon_11 = assault_weapon_11.length;
var len_burgulary_11 = burglary_11.length;
var len_homicide_11 = homicide_11.length;
var len_vehicle_theft_11 = vehicle_theft_11.length;
var len_robbery_11 = robbery_11.length;
var len_sex_abuse_11 = sex_abuse_11.length; 
var len_auto_theft_11 = auto_theft_11.length;
var len_theft_other_11 = theft_other_11.length;

// console.log("arson 11 " + len_arson_11);
// console.log("assault_weapon 11 " + len_assault_weapon_11);
// console.log("burgulary 11 " + len_burgulary_11);
// console.log("homicide 11 " + len_homicide_11);
// console.log("vehicle theft 11 " + len_vehicle_theft_11);
// console.log("robbery 11 " + len_robbery_11);
// console.log("sex_abuse 11 " + len_sex_abuse_11);
// console.log("auto theft 11 " + len_auto_theft_11);
// console.log("theft other 11  " + len_theft_other_11);


///////////////////                  2012                ////////////////

var offense_in_12=[];

for (var i = 0; i < c12.length; i++){
    const obj=c12[i]
    const offense_12 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])

    offense_in_12.push(offense_12)


}
var len_12 = offense_in_12.length; 
// console.log("2012 crime total " + len_12)

var arson_12=offense_in_12.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_12=offense_in_12.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_12=offense_in_12.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_12=offense_in_12.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_12=offense_in_12.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_12=offense_in_12.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_12=offense_in_12.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_12=offense_in_12.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_12=offense_in_12.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_12 = arson_12.length;
var len_assault_weapon_12 = assault_weapon_12.length;
var len_burgulary_12 = burglary_12.length;
var len_homicide_12 = homicide_12.length;
var len_vehicle_theft_12 = vehicle_theft_12.length;
var len_robbery_12 = robbery_12.length;
var len_sex_abuse_12 = sex_abuse_12.length; 
var len_auto_theft_12 = auto_theft_12.length;
var len_theft_other_12 = theft_other_12.length;

// console.log("arson 12 " + len_arson_12);
// console.log("assault_weapon 12 " + len_assault_weapon_12);
// console.log("burgulary 12 " + len_burgulary_12);
// console.log("homicide 12 " + len_homicide_12);
// console.log("vehicle theft 12 " + len_vehicle_theft_12);
// console.log("robbery 12 " + len_robbery_12);
// console.log("sex_abuse 12 " + len_sex_abuse_12);
// console.log("auto theft 12 " + len_auto_theft_12);
// console.log("theft other 12  " + len_theft_other_12);

///////////////////                  2013                ////////////////


    var offense_in_13=[];

    for (var i = 0; i < c13.length; i++){
        const obj=c13[i]
        const offense_13 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                    'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                    'YBLOCK','XBLOCK'])

        offense_in_13.push(offense_13)
    }
    var len_13 = offense_in_13.length; 
    // console.log("2013 crime total " + len_13)

    var arson_13=offense_in_13.filter(c=>c.OFFENSE=='ARSON')
    var assault_weapon_13=offense_in_13.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
    var burglary_13=offense_in_13.filter(c=>c.OFFENSE=='BURGLARY')
    var homicide_13=offense_in_13.filter(c=>c.OFFENSE=='HOMICIDE')
    var vehicle_theft_13=offense_in_13.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
    var robbery_13=offense_in_13.filter(c=>c.OFFENSE=='ROBBERY')
    var sex_abuse_13=offense_in_13.filter(c=>c.OFFENSE=='SEX ABUSE')
    var auto_theft_13=offense_in_13.filter(c=>c.OFFENSE=='THEFT F/AUTO')
    var theft_other_13=offense_in_13.filter(c=>c.OFFENSE=='THEFT/OTHER')

    var len_arson_13 = arson_13.length;
    var len_assault_weapon_13 = assault_weapon_13.length;
    var len_burgulary_13 = burglary_13.length;
    var len_homicide_13 = homicide_13.length;
    var len_vehicle_theft_13 = vehicle_theft_13.length;
    var len_robbery_13 = robbery_13.length;
    var len_sex_abuse_13 = sex_abuse_13.length; 
    var len_auto_theft_13 = auto_theft_13.length;
    var len_theft_other_13 = theft_other_13.length;
    
    // console.log("arson 13 " + len_arson_13);
    // console.log("assault_weapon 13 " + len_assault_weapon_13);
    // console.log("burgulary 13 " + len_burgulary_13);
    // console.log("homicide 13 " + len_homicide_13);
    // console.log("vehicle theft 13 " + len_vehicle_theft_13);
    // console.log("robbery 13 " + len_robbery_13);
    // console.log("sex_abuse 13 " + len_sex_abuse_13);
    // console.log("auto theft 13 " + len_auto_theft_13);
    // console.log("theft other 13  " + len_theft_other_13);

///////////////////                  2014                ////////////////

    var offense_in_14=[];

    for (var i = 0; i < c14.length; i++){
        const obj=c14[i]
        const offense_14 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                    'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                    'YBLOCK','XBLOCK'])

        offense_in_14.push(offense_14)
    }
    var len_14 = offense_in_14.length; 
    // console.log("2014 crime total " + len_14)

    var arson_14=offense_in_14.filter(c=>c.OFFENSE=='ARSON')
    var assault_weapon_14=offense_in_14.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
    var burglary_14=offense_in_14.filter(c=>c.OFFENSE=='BURGLARY')
    var homicide_14=offense_in_14.filter(c=>c.OFFENSE=='HOMICIDE')
    var vehicle_theft_14=offense_in_14.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
    var robbery_14=offense_in_14.filter(c=>c.OFFENSE=='ROBBERY')
    var sex_abuse_14=offense_in_14.filter(c=>c.OFFENSE=='SEX ABUSE')
    var auto_theft_14=offense_in_14.filter(c=>c.OFFENSE=='THEFT F/AUTO')
    var theft_other_14=offense_in_14.filter(c=>c.OFFENSE=='THEFT/OTHER')

    var len_arson_14 = arson_14.length;
    var len_assault_weapon_14 = assault_weapon_14.length;
    var len_burgulary_14 = burglary_14.length;
    var len_homicide_14 = homicide_14.length;
    var len_vehicle_theft_14 = vehicle_theft_14.length;
    var len_robbery_14 = robbery_14.length;
    var len_sex_abuse_14 = sex_abuse_14.length; 
    var len_auto_theft_14 = auto_theft_14.length;
    var len_theft_other_14 = theft_other_14.length;
    
    // console.log("arson 14 " + len_arson_14);
    // console.log("assault_weapon 14 " + len_assault_weapon_14);
    // console.log("burgulary 14 " + len_burgulary_14);
    // console.log("homicide 14 " + len_homicide_14);
    // console.log("vehicle theft 14 " + len_vehicle_theft_14);
    // console.log("robbery 14 " + len_robbery_14);
    // console.log("sex_abuse 14 " + len_sex_abuse_14);
    // console.log("auto theft 14 " + len_auto_theft_14);
    // console.log("theft other 14  " + len_theft_other_14);


///////////////////                  2015                ////////////////

    var offense_in_15=[];

    for (var i = 0; i < c15.length; i++){
        const obj=c15[i]
        const offense_15 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                    'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                    'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                    'YBLOCK','XBLOCK'])

        offense_in_15.push(offense_15)
    }
    var len_15 = offense_in_15.length; 
    // console.log("2015 crime total " + len_15)

    var arson_15=offense_in_15.filter(c=>c.OFFENSE=='ARSON')
    var assault_weapon_15=offense_in_15.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
    var burglary_15=offense_in_15.filter(c=>c.OFFENSE=='BURGLARY')
    var homicide_15=offense_in_15.filter(c=>c.OFFENSE=='HOMICIDE')
    var vehicle_theft_15=offense_in_15.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
    var robbery_15=offense_in_15.filter(c=>c.OFFENSE=='ROBBERY')
    var sex_abuse_15=offense_in_15.filter(c=>c.OFFENSE=='SEX ABUSE')
    var auto_theft_15=offense_in_15.filter(c=>c.OFFENSE=='THEFT F/AUTO')
    var theft_other_15=offense_in_15.filter(c=>c.OFFENSE=='THEFT/OTHER')

    var len_arson_15 = arson_15.length;
    var len_assault_weapon_15 = assault_weapon_15.length;
    var len_burgulary_15 = burglary_15.length;
    var len_homicide_15 = homicide_15.length;
    var len_vehicle_theft_15 = vehicle_theft_15.length;
    var len_robbery_15 = robbery_15.length;
    var len_sex_abuse_15 = sex_abuse_15.length; 
    var len_auto_theft_15 = auto_theft_15.length;
    var len_theft_other_15 = theft_other_15.length; 


    // console.log("arson 15 " + len_arson_15);
    // console.log("assault weapon 15 " + len_assault_weapon_15);
    // console.log("burglary 15  " + len_burgulary_15);
    // console.log("homicide 15 " + len_homicide_15);
    // console.log("vehicle theft " + len_vehicle_theft_15);
    // console.log("robbery 15 " + len_robbery_15);
    // console.log("sex abuse 15 " + len_sex_abuse_15);
    // console.log("auto theft 15 " + len_auto_theft_15);
    // console.log("theft other 15 " + len_theft_other_15);


///////////////////                  2016                ////////////////

var offense_in_16=[];

for (var i = 0; i < c16.length; i++){
    const obj=c16[i]
    const offense_16 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])
    offense_in_16.push(offense_16)
}
var len_16 = offense_in_16.length; 
// console.log("2016 crime total " + len_16)

var arson_16=offense_in_16.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_16=offense_in_16.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_16=offense_in_16.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_16=offense_in_16.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_16=offense_in_16.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_16=offense_in_16.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_16=offense_in_16.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_16=offense_in_16.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_16=offense_in_16.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_16 = arson_16.length;
var len_assault_weapon_16 = assault_weapon_16.length;
var len_burgulary_16 = burglary_16.length;
var len_homicide_16 = homicide_16.length;
var len_vehicle_theft_16 = vehicle_theft_16.length;
var len_robbery_16 = robbery_16.length;
var len_sex_abuse_16 = sex_abuse_16.length; 
var len_auto_theft_16 = auto_theft_16.length;
var len_theft_other_16 = theft_other_16.length; 


// console.log("arson 16 " + len_arson_16);
// console.log("assault weapon 16 " + len_assault_weapon_16);
// console.log("burgulary 16 " + len_burgulary_16);
// console.log("homicide 16 " + len_homicide_16);
// console.log("vehicle theft 16 " + len_vehicle_theft_16);
// console.log("robbery 16 " + len_robbery_16);
// console.log("sex abuse 16 " +len_sex_abuse_16);
// console.log("auto theft 16 " + len_auto_theft_16);
// console.log("theft other 16 " + len_theft_other_16);


///////////////////                  2017                ////////////////

var offense_in_17=[];

for (var i = 0; i < c17.length; i++){
    const obj=c17[i]
    const offense_17 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])

    offense_in_17.push(offense_17)
}

var len_17 = offense_in_17.length; 
// console.log("2017 crime total " + len_17)

var arson_17=offense_in_17.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_17=offense_in_17.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_17=offense_in_17.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_17=offense_in_17.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_17=offense_in_17.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_17=offense_in_17.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_17=offense_in_17.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_17=offense_in_17.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_17=offense_in_17.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_17 = arson_17.length;
var len_assault_weapon_17 = assault_weapon_17.length;
var len_burgulary_17 = burglary_17.length;
var len_homicide_17 = homicide_17.length;
var len_vehicle_theft_17 = vehicle_theft_17.length;
var len_robbery_17 = robbery_17.length;
var len_sex_abuse_17 = sex_abuse_17.length; 
var len_auto_theft_17 = auto_theft_17.length;
var len_theft_other_17 = theft_other_17.length; 


// console.log("arson 17 " + len_arson_17);
// console.log("assault weapon 17 " + len_assault_weapon_17);
// console.log("burgulary 17 " + len_burgulary_17);
// console.log("homicide 17 " + len_homicide_17);
// console.log("vehicle theft 17 " + len_vehicle_theft_17);
// console.log("robbery 17 " + len_robbery_17);
// console.log("sex abuse 17 " +len_sex_abuse_17);
// console.log("auto theft 17 " + len_auto_theft_17);
// console.log("theft other 17 " + len_theft_other_17);


///////////////////                  2018                ////////////////
var offense_in_18=[];

for (var i = 0; i < c18.length; i++){
    const obj=c18[i]
    const offense_18 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])

    offense_in_18.push(offense_18)
}

var len_18 = offense_in_18.length; 
// console.log("2018 crime total " + len_18)

var arson_18=offense_in_18.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_18=offense_in_18.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_18=offense_in_18.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_18=offense_in_18.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_18=offense_in_18.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_18=offense_in_18.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_18=offense_in_18.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_18=offense_in_18.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_18=offense_in_18.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_18 = arson_18.length;
var len_assault_weapon_18 = assault_weapon_18.length;
var len_burgulary_18 = burglary_18.length;
var len_homicide_18 = homicide_18.length;
var len_vehicle_theft_18 = vehicle_theft_18.length;
var len_robbery_18 = robbery_18.length;
var len_sex_abuse_18 = sex_abuse_18.length; 
var len_auto_theft_18 = auto_theft_18.length;
var len_theft_other_18 = theft_other_18.length; 


// console.log("arson 18 " + len_arson_18);
// console.log("assault weapon 18 " + len_assault_weapon_18);
// console.log("burgulary 18 " + len_burgulary_18);
// console.log("homicide 18 " + len_homicide_18);
// console.log("vehicle theft 18 " + len_vehicle_theft_18);
// console.log("robbery 18 " + len_robbery_18);
// console.log("sex abuse 18 " +len_sex_abuse_18);
// console.log("auto theft 18 " + len_auto_theft_18);
// console.log("theft other 18 " + len_theft_other_18);



///////////////////                  2019                ////////////////

var offense_in_19=[];

for (var i = 0; i < c19.length; i++){
    const obj=c19[i]
    const offense_19 = omit(obj, ['ANC', 'BID','BLOCK','BLOCK_GROUP','CCN','CENSUS_TRACT','DISTRICT',
                                'END_DATE','LATITUDE','LONGITUDE','METHOD','NEIGHBORHOOD_CLUSTER','OBJECTID',
                                'OCTO_RECORD_ID','REPORT_DAT','PSA','SHIFT','START_DATE','VOTING_PRECINCT','WARD','X','Y',
                                'YBLOCK','XBLOCK'])

    offense_in_19.push(offense_19)
}

var len_19 = offense_in_19.length; 
// console.log("2019 crime total " + len_19)

var arson_19=offense_in_19.filter(c=>c.OFFENSE=='ARSON')
var assault_weapon_19=offense_in_19.filter(c=>c.OFFENSE=='ASSAULT W/DANGEROUS WEAPON')
var burglary_19=offense_in_19.filter(c=>c.OFFENSE=='BURGLARY')
var homicide_19=offense_in_19.filter(c=>c.OFFENSE=='HOMICIDE')
var vehicle_theft_19=offense_in_19.filter(c=>c.OFFENSE=='MOTOR VEHICLE THEFT')
var robbery_19=offense_in_19.filter(c=>c.OFFENSE=='ROBBERY')
var sex_abuse_19=offense_in_19.filter(c=>c.OFFENSE=='SEX ABUSE')
var auto_theft_19=offense_in_19.filter(c=>c.OFFENSE=='THEFT F/AUTO')
var theft_other_19=offense_in_19.filter(c=>c.OFFENSE=='THEFT/OTHER')

var len_arson_19 = arson_19.length;
var len_assault_weapon_19 = assault_weapon_19.length;
var len_burgulary_19 = burglary_19.length;
var len_homicide_19 = homicide_19.length;
var len_vehicle_theft_19 = vehicle_theft_19.length;
var len_robbery_19 = robbery_19.length;
var len_sex_abuse_19 = sex_abuse_19.length; 
var len_auto_theft_19 = auto_theft_19.length;
var len_theft_other_19 = theft_other_19.length; 



////////////////////////////////      Unemployment Data /////////////////////////
var ui_years = u1.map(u => u.Year);
var ui_rates = u1.map(function(u){

    ui_vals = Object.values(u);
    return ui_vals.slice(1,12).filter(d => d!=null);
    
});
// console.log(ui_rates); 

var rates = ui_rates.map(i => math.mean(i));


var unem2010 = rates[0];
var unem2011 = rates[1];
var unem2012 = rates[2];
var unem2013 = rates[3];
var unem2014 = rates[4];
var unem2015 = rates[5];
var unem2016 = rates[6];
var unem2017 = rates[7];
var unem2018 = rates[8];
var unem2019 = rates[9];

///////////////////       Crime By Type By Year ////////////////////

var Arson = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_arson_10,len_arson_11,len_arson_12,len_arson_13,
    len_arson_14,len_arson_15,len_arson_16,len_arson_17,len_arson_18,
    len_arson_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Arson"
  };
  
  var Weapon = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_assault_weapon_10, len_assault_weapon_11,len_assault_weapon_12,
    len_assault_weapon_13, len_assault_weapon_14, len_assault_weapon_15,
    len_assault_weapon_16, len_assault_weapon_17, len_assault_weapon_18,
    len_assault_weapon_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Assault Weapon"
  };
  var Burgulary = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_burgulary_10, len_burgulary_11, len_burgulary_12,
    len_burgulary_13, len_burgulary_14, len_burgulary_15, 
    len_burgulary_16, len_burgulary_17, len_burgulary_18,
    len_burgulary_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name:"Burgulary"
  };  
  var Homicide = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_homicide_10, len_homicide_11, len_homicide_12,
    len_homicide_13, len_homicide_14, len_homicide_15,
    len_homicide_16, len_homicide_17, len_homicide_18, 
    len_homicide_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Homicide"
  };
  var VehicleTheft = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_vehicle_theft_10, len_vehicle_theft_11, len_vehicle_theft_12,
    len_vehicle_theft_13, len_vehicle_theft_14, len_vehicle_theft_15,
    len_vehicle_theft_16, len_vehicle_theft_17, len_vehicle_theft_18,
    len_vehicle_theft_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Vehicle Theft"
  };
  var Robbery = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_robbery_10,len_robbery_11,len_robbery_12,len_robbery_13,
    len_robbery_14,len_robbery_15,len_robbery_16,len_robbery_17,
    len_robbery_18, len_robbery_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name:"Robbery"
  };
  var Sex_Abuse = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_sex_abuse_10, len_sex_abuse_11, len_sex_abuse_12,
    len_sex_abuse_13, len_sex_abuse_14, len_sex_abuse_15,
    len_sex_abuse_16, len_sex_abuse_17,len_sex_abuse_18, 
    len_sex_abuse_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Sex Abuse"
  };
  var Auto_Theft = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_auto_theft_10, len_auto_theft_11, len_auto_theft_12,
    len_auto_theft_13, len_auto_theft_14, len_auto_theft_15,
    len_auto_theft_16, len_auto_theft_17, len_auto_theft_18, 
    len_auto_theft_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name: "Auto Theft"
  };

  var Gen_Theft = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    y: [len_theft_other_10, len_theft_other_11, len_theft_other_12,
    len_theft_other_13, len_theft_other_14, len_theft_other_15,
    len_theft_other_16, len_theft_other_17, len_theft_other_18,
    len_theft_other_19],
    line: {shape: 'spline'},
    type: 'scatter',
    name:"General Theft",
  };
  var data = [Arson, Weapon, Burgulary, Homicide, 
        VehicleTheft, Robbery, Sex_Abuse, Auto_Theft,
        Gen_Theft];
  
var layout = {
    title: 'Type of Crime over Time',
    showlegend: false
        };
  Plotly.newPlot('timeseries1', data, layout);
  Plotly.newPlot('timeseries2', data, layout);
  Plotly.newPlot('timeseries3', data, layout);

///////////////   Dual Axis Graph ////////////////////////////////////////////

var BarPlots = {
    x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019], 
    y: [len_10, len_11, len_12, len_13, len_14, len_15, len_16, len_17,
    len_18, len_19],
    type: 'bar',
    name: "Total Crime Per Year",
};

var LineGraph = {
    x:[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019], 
    y: [unem2010, unem2011, unem2012, unem2013, unem2014, unem2015,
    unem2016, unem2017, unem2018, unem2019],
    type: "line",
    yaxis: 'y2',
    name: "Unemployment Trends"
    
};

var data2 = [BarPlots, LineGraph];

var layout2 = {
    title: "Crime Trends to Unemployment Trends", 
    showlegend: true, 
    yaxis: {title: "Crime Rates"},
    yaxis2: {title: "Unemployment Rate",
    overlaying: "y",
    side: "right"}
}; 
Plotly.newPlot('unemployment-crime1', data2, layout2);
// Plotly.newPlot('CORRECTDIV2', data2, layout2);
// Plotly.newPlot('CORRECTDIV3', data2, layout2);

                                        }); 
                                    });                           
                                }); 
                            });
                        });
                    });
                });
            }); 
        }); 
    });
});


