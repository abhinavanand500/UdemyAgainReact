import axios from "axios";
const KEY = "AIzaSyCGeIt39ff3FqUI761ribO-UZLX2_p5Ef8";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
