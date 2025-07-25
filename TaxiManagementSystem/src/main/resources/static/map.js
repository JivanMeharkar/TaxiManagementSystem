function initMap() {
    var mapOptions = {
        center: {lat: 40.730610, lng: -73.935242},
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Set driver position (for example, from the driver's current GPS coordinates)
    var driverMarker = new google.maps.Marker({
        position: {lat: 40.7413549, lng: -73.9980244}, // Sample coordinates
        map: map,
        title: "Driver"
    });
}

// Call initMap to load the map when the page is loaded
window.onload = initMap;
