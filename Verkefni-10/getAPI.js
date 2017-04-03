$.ajax({
  'url': 'http://apis.is/earthquake/is',
  'type': 'GET',
  'dataType': 'json',
  'success': function(response) {
    
    
// ******************* Jarðskjálfti API *******************
    
  var earthquakeData = [];
    
   for (let i = 0; i < response.results.length; i++) {		
     earthquakeData.push
     ({
        latitude:response.results[i].latitude,
        longitude:response.results[i].longitude,
        depth:response.results[i].depth,
	  	  size:response.results[i].size,
        quality:response.results[i].quality,
        humanRead:response.results[i].humanReadableLocation
     }) 
	 	
	 }; // for end 
    
   console.log(earthquakeData);
   console.log(earthquakeData.length);
    
    var map;
     
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: new google.maps.LatLng(64.9140481,-18.70352,7),
      mapTypeId: 'terrain'
    });
    
    map.data.setStyle(function(feature) {
      for (var i = 0; i < earthquakeData.length; i++) {			
        // response er JSON object, results er fylki, eventDateName er key
        var magnitude = earthquakeData[i].size;
      };	
      return {
        icon: getCircle(magnitude)
      };
    });
  }
  
  function getCircle(magnitude) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'red',
      fillOpacity: .2,
      scale: Math.pow(2, magnitude) / 2,
      strokeColor: 'white',
      strokeWeight: .5
    };
  }
  
  function eqfeed_callback(results) {
    map.data.addGeoJson(results);
  }
    
    }

});
/*

{
  "results": [
    {
      "timestamp": "2013-09-17T10:35:46.000Z",
      "latitude": 66.181,
      "longitude": -17.764,
      "depth": 11.3,
      "size": 0.9,
      "quality": 54.02,
      "humanReadableLocation": "3,8 km ANA af Flatey"
    },
    {
      "timestamp": "2013-09-17T04:52:13.000Z",
      "latitude": 63.684,
      "longitude": -19.282,
      "depth": 4.7,
      "size": 1.7,
      "quality": 35.9,
      "humanReadableLocation": "5,1 km NNV af Goðabungu"
    }
  ]
}

*/