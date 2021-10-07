import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearch) => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData(defaultSearch);
    }, [defaultSearch]);

    const fetchData = async (search) => {
        const response = await youtube.get('/search', {
            params: {
                q: search
            }
        })

        setVideos(response.data.items);
    } 


    return [videos, fetchData];
}


export default useVideos;