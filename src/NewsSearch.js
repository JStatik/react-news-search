import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import showDataOrError from './helpers/showDataOrError';
import Header from './components/Header';
import Loading from './components/Loading';
import NewsForm from './components/NewsForm';

const NewsSearch = () => {
    const [ category, setCategory ] = useState( 'general' );
    const { data: newsAPI, loading, error } = useFetch( category );

    return (
        <>
            <Header title="Noticias" />

            <div className="container white">
                <NewsForm setCategory={ setCategory } />

                <hr/>

                <div className="row" style={ { marginTop: '15px' } }>
                    {
                        loading
                            ?
                                <Loading />
                            :
                                showDataOrError( newsAPI, error )
                    }
                </div>
            </div>
        </>
    );
};

export default NewsSearch;
