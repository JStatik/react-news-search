import React from 'react';
import PropTypes from 'prop-types';
import { news_select } from './NewsForm.module.css';

const NewsSelect = ( { category, handleChange } ) => {
    return (
        <select
            className={ `browser-default ${ news_select }` }
            name="category"
            value={ category }
            onChange={ handleChange }
        >
            <option value="">-Seleccione una opción-</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="general">General</option>
            <option value="business">Negocios</option>               
            <option value="health">Salud</option>             
            <option value="technology">Tecnología</option>
        </select>
    );
};

NewsSelect.propTypes = {
    category: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default NewsSelect;
