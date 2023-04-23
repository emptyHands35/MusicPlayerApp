import { useState, useEffect } from 'react';
import endpoint from '../utils/endpoint';
import axios from 'axios';

const useFetchSongs = (searchValue: string) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>(null);

    const params = {
        term: searchValue,
        entity: "musicTrack",
        limit: 25 // increase the limit to get more songs
    };

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