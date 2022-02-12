import { keyboard } from '@testing-library/user-event/dist/keyboard';
import axios from 'axios';

export const getPlacesData = async(type, sw, ne) => {
    try{
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat
            },
            headers: {
                'x-rapidapi-key':'80126e7cdbmsh4d2a7b56055ebfcp1beae5jsn5e6f6dae89e3',
                'x-rapidapi-host':'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getWeaterData = async (lat, lng) => {
    try{
        if(lat && lng){
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat: lat, lon: lng},
                headers: {
                    'x-rapidapi-key':'80126e7cdbmsh4d2a7b56055ebfcp1beae5jsn5e6f6dae89e3',
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
                }
            });

            return data;
        }
    } catch (error) {
        console.log(error);
    }
}