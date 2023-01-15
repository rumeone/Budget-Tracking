import axios from "axios";

const instans = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

export default instans;