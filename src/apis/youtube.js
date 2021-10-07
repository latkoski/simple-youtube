import axios from "axios";

const KEY = 'AIzaSyCr6KTsKrNRKtBUdbtR1MVOp01jhv2hwEM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    } 
});