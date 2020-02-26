import axios from 'axios';
export default axios.create({
    baseURL: `https://developer.nps.gov/api/v1/parks?&api_key=${process.env.REACT_APP_NPS_KEY}`,
});