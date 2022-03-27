let lat = 40.95501595681849;
let lng = -76.88195822931112;
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
            name: 'Spawn',
            source: "assets/the_deadly_spawn_animation/scene.gltf",
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            rotation: {
                x: 0,
                y: 90,
                z: 0
            },
            scale: {
                x: 0.5,
                y: 0.5,
                z: 0.5
            }
        },
        {
            name: 'Magnemite',
            location: {
                lat: 40.95501595681849,
                lng: -76.88195822931112
            },
            source: "assets/magnemite/scene.gltf",
            position: {
                x: -5,
                y: 0,
                z: -5
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            scale: {
                x: 0.5,
                y: 0.5,
                z: 0.5
            }
        },
        // {
        //     name: 'Tom',
        //     source: "assets/tom/tom2.gltf",
        //     position: {
        //         x: -4,
        //         y: 0,
        //         z: -2
        //     },
        //     rotation: {
        //         x: 0,
        //         y: 0,
        //         z: 0
        //     },
        //     scale: {
        //         x: 0.5,
        //         y: 0.5,
        //         z: 0.5
        //     }
        // },
        // {
        //     name: 'Marceline',
        //     source: "assets/young_marceline_horror/scene.gltf",
        //     position: {
        //         x: -3,
        //         y: 0,
        //         z: 2
        //     },
        //     rotation: {
        //         x: 0,
        //         y: 0,
        //         z: 0
        //     },
        //     scale: {
        //         x: 5,
        //         y: 5,
        //         z: 5
        //     }
        // }
    ];
}

function renderPlaces(places) {
    console.log('dcm');
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let location = place.location;
        let source = place.source;
        let position = place.position;
        let rotation = place.rotation;
        let scale = place.scale
        console.log(place.name, position, rotation, scale)

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lng};`);
        model.setAttribute('gltf-model', `${source}`);
        model.setAttribute('rotation', `${rotation.x} ${rotation.y} ${rotation.z}`);
        model.setAttribute('scale', `${scale.x} ${scale.y} ${scale.z}`);
        model.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
        model.setAttribute('animation-mixer', '');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}