import { useState, useEffect } from 'react';
import endpoint from '../services/endpoint'; //endpoint is url to iTunes API
import axios from 'axios';

const useFetchSongs = (searchValue: string) => {
    const [data, setData] = useState<any>(null); //to store results from api endpoint
    const [isLoading, setIsLoading] = useState<boolean>(false); //utilized to show spinner between data being fetched to loaded
    const [error, setError] = useState<unknown>(null); //to save any errors

    const params = {
        term: searchValue,
        entity: "musicTrack",
        limit: 25 // increase the limit to get more songs
    };

    //useEffect that runs eachtime when searchValue is changed
    useEffect(() => {
        setIsLoading(true)
        axios.get(endpoint, { params })
            .then(response => {
                setData(response.data.results);
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
                setError(error)
                setIsLoading(false)
            });
    }, [searchValue]);

    return { data, isLoading, error };
};

export default useFetchSongs;