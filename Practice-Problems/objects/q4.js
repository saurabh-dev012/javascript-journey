// Destructure the city and lat from the location object :

const locations = {
    city : "Bhopal",
    coordinates: {
        lat : 23.2,
        lng : 77.4,
    },
};
let{city} = locations;
let{lat} = locations.coordinates;
