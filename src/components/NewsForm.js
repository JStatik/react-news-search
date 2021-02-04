import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidNewsForm from '../helpers/isValidNewsForm';
import { search, heading } from './NewsForm/NewsForm.module.css';
import Error from './Error';
import NewsSelect from './NewsForm/NewsSelect';
import SubmitButton from './NewsForm/SubmitButton';

const NewsForm = ( { setCategory } ) => {
    const [ formValues, handleChange, reset ] = useForm( { category: '' } );
    const { category } = formValues;

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const escapedCategory = validator.escape( category );

        const { msgErrorCategory, isValid } = isValidNewsForm( escapedCategory );
        setError( msgErrorCategory );

        if( isValid ) {
            setCategory( escapedCategory );
            reset();
        }

        setDisabled( false );
    };

    return (
        <div className={ `row ${ search }` }>
            <div className="col s12 m8 offset-m2">
                {
                    error
                        &&
                    <Error
                        height="auto"
                        size="13px"
                        error={ error }
                    />
                }

                <form autoComplete="off" onSubmit={ handleSubmit }>
                    <h5 className={ heading }>Encuentra noticias por categoría</h5>

                    <NewsSelect
                        category={ category }
                        handleChange={ handleChange }
                    />

                    <SubmitButton disabled={ disabled } />
                </form>
            </div>
        </div>
    );
};

NewsForm.propTypes = {
    setCategory: PropTypes.func.isRequired
};

export default NewsForm;
