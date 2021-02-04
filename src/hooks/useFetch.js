import { useEffect, useRef, useState } from 'react';

const useFetch = ( category ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: [], loading: true, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        setState( { data: [], loading: true, error: null } );

        const getNews = async() => {
            try{
                const url = `https://newsapi.org/v2/top-headlines?country=co&category=${ category }&apiKey=d31f940437944e08b13069ed980827fe`;

                const request = await fetch( url );
                const response = await request.json();

                if( response.status === 'ok' ) {
                    const { articles } = response;

                    isMountedRef.current && setState( { data: articles, loading: false, error: null } );
                } else {
                    isMountedRef.current && setState( { data: [], loading: false, error: 'Error en la petición.' } );
                }
            } catch( err ) {
                setState( { data: [], loading: false, error: err } );
            }                
        };

        getNews();
    }, [ category ] );

    return state;
};

export default useFetch;
