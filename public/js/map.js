const map = new maplibregl.Map({
    container: 'my-map',
    style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${window.mapToken}`,
    center: [window.lon, window.lat], 
    zoom: 13
});

// Create popup content
const popup = new maplibregl.Popup({ offset: 25 })
    .setHTML(`<h4>${window.locationName}</h4><p>This is your selected location.</p>`);

// Create marker
const marker = new maplibregl.Marker({
    color: "#ff0000"
})
.setLngLat([window.lon, window.lat])
.setPopup(popup)
.addTo(map);

