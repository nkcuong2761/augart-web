// live-server --https=/Users/ckn006/Desktop/augart-web/node_modules/live-server-https
// cs lounge: 40.95501595681849, -76.88195822931112
// swartz: 40.95348178336501, -76.88369381626518
// bison: 40.956773421830896, -76.88482320909789
// quad: 40.95460659057451, -76.88349459832183
// holmes hall: 40.95286088780876, -76.88150820456019
let lat = 40.95460659057451;
let lng = -76.88349459832183;
window.onload = () => {
    let places = staticLoadPlaces();
    // loadCurrentCoords();
    renderPlaces(places)
};

// function loadCurrentCoords() {
//     return new Promise( resolve => {
//         setTimeout(() => {navigator.geolocation.getCurrentPosition((position) => {
//             lat = position.coords.latitude;
//             lng = position.coords.longitude;
//             console.log(lat, lng);
//             resolve();
//         })}, 500)
//     })
// }

function staticLoadPlaces() {
    return [
        {
            name: 'Tom',
            location: {
                lat: 40.95346742772507,
                lng: -76.88372081933453
            },
            source: "assets/tom/tom2.gltf",
            position: "30 0 30",
            rotation: "0 0 0",
            scale: "2 2 2"
        },
        {
            name: 'Magnemite',
            location: {
                lat: 40.95346742772507,
                lng: -76.88372081933453
            },
            source: "assets/magnemite/scene.gltf",
            position: "-30 0 50",
            rotation: "0 140 0",
            scale: "10 10 10"
        },
        {
            name: 'Spawn',
            location: {
                lat: 40.95346742772507,
                lng: -76.88372081933453
            },
            source: "assets/the_deadly_spawn/scene.gltf",
            position: "500 -400 500",
            rotation: "0 -130 0",
            scale: "50 50 50"
        },
        {
            name: 'Marceline',
            location: {
                lat: 40.95346742772507,
                lng: -76.88372081933453
            },
            source: "assets/young_marceline_horror/scene.gltf",
            position: "-100 -100 -20",
            rotation: "0 0 0",
            scale: "10 10 10"
        },
        {
            name: 'adam',
            location: {
                lat: 40.95346742772507,
                lng: -76.88372081933453
            },
            source: "assets/adamHead/adamHead.gltf",
            position: "100 -100 20",
            rotation: "0 0 0",
            scale: "10 10 10"
        }
    ];
}

function renderPlaces(places) {
    console.log('dcm');
    // let scene = document.querySelector('a-scene');
    // let camera = document.querySelector('a-camera');
    let parent = document.getElementById('parent');
    parent.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`)

    places.forEach((place) => {
        // let location = place.location;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`);
        model.setAttribute('gltf-model', `${place.source}`);
        model.setAttribute('position', `${place.position}`);
        model.setAttribute('rotation', `${place.rotation}`);
        model.setAttribute('scale', `${place.scale}`);
        model.setAttribute('animation-mixer', '');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        parent.appendChild(model);
    });
}