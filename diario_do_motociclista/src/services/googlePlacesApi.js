import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;
const address = 'Brasília, DF, Brasil';


export default function buscarLocal() {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
            address: address,
            key: API_KEY
        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    });


};
