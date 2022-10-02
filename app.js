
let lon = 25.424
let lat = 55.123

var map = L.map("my-map").setView([lat, lon], 14);

      // Get your own API Key on https://myprojects.geoapify.com
      var myAPIKey = "3af973bea8b043a0b370534ff52a49d6";

      // Retina displays require different mat tiles quality
      var isRetina = L.Browser.retina;

      var baseUrl =
        "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
      var retinaUrl =
        "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

      // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
      L.tileLayer(isRetina ? retinaUrl : baseUrl, {
        attribution:
          'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
        apiKey: '3af973bea8b043a0b370534ff52a49d6',
        maxZoom: 20,
        id: "osm-bright",
      }).addTo(map);


      const markerIcon = L.icon({
        iconUrl: `https://api.geoapify.com/v1/icon/?type=awesome&color=%23000000&size=large&apiKey=${myAPIKey}`,
        iconSize: [31, 46], // size of the icon
        iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
      });
    
      $("#locBtn").click(()=>{
        lon = 44.7937884
        lat = 41.7038101
        map.setView([lat,lon,14])
        $.ajax({
            type: 'GET',
              dataType:"json",
            url: `https://api.geoapify.com/v1/isoline?lat=${lat}&lon=${lon}8&type=time&mode=transit&range=1800&apiKey=3af973bea8b043a0b370534ff52a49d6`,
           
            success: function (data, status, xhr) {
              console.log('data: ', data);
              
            }
          })
          .done(function( data ) {
            
            const popUp = L.popup().setContent("Radisson Blu Iveria");
            const Marker = L.marker([lat, lon], {
                icon: markerIcon
              }).bindPopup(popUp).addTo(map);
          });
          
   })

   $("#locBtn1").click(()=>{
    lon = 44.7948348337
    lat = 41.7025836438
    map.setView([lat,lon,14])
    $.ajax({
        type: 'GET',
          dataType:"json",
        url: `https://api.geoapify.com/v1/isoline?lat=${lat}&lon=${lon}8&type=time&mode=transit&range=1800&apiKey=3af973bea8b043a0b370534ff52a49d6`,
       
        success: function (data, status, xhr) {
          console.log('data: ', data);
          
        }
      })
      .done(function( data ) {
        const popUp = L.popup().setContent("Biltmore Tbilisi");
            const Marker = L.marker([lat, lon], {
                icon: markerIcon
              }).bindPopup(popUp).addTo(map);
          });
     
    
    
})
$("#locBtn2").click(()=>{
    lon = 44.7981
    lat = 41.6989
    map.setView([lat,lon,14])
    $.ajax({
        type: 'GET',
          dataType:"json",
        url: `https://api.geoapify.com/v1/isoline?lat=${lat}&lon=${lon}8&type=time&mode=transit&range=1800&apiKey=3af973bea8b043a0b370534ff52a49d6`,
       
        success: function (data, status, xhr) {
          console.log('data: ', data);
          
        }
      })
      .done(function( data ) {
        const popUp = L.popup().setContent(" Hotel Marriott Tbilisi");
        const Marker = L.marker([lat, lon], {
            icon: markerIcon
          }).bindPopup(popUp).addTo(map);
      });
    
    
})





