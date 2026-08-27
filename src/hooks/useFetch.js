import {useState, useEffect} from 'react';
export const useFetch = (fetchFunction) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
    };
    useEffect(() => {   
        fetchData();
    }, [fetchFunction]);

    return { fetchData,data, loading, error };
}