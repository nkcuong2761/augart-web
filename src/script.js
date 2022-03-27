let lat = 40.95501595681849;
let lng = -76.88195822931112;
window.onload = () => {
    let places = staticLoadPlaces();
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        console.log(lat, lng)
    });
    renderPlaces(places);
     
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 40.95501595681849,
                lng: -76.88195822931112
            },
            source: "assets/magnemite/scene.gltf",
            position: {
                x: -7,
                y: 0,
                z: -5
            },
            rotation: {
                x: 0,
                y: 40,
                z: 0
            },
            scale: {
                x: 0.5,
                y: 0.5,
                z: 0.5
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let location = place.location
        let source = place.source;
        let position = place.position;
        let rotation = place.rotation;
        let scale = place.scale

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`);
        model.setAttribute('gltf-model', `${source}`);
        model.setAttribute('rotation', `${rotation.x} ${rotation.y} ${rotation.z}`);
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', `${scale.x} ${scale.y} ${scale.z}`);
        model.setAttribute('position', `${position.x} ${position.y} ${position.z}`)

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}