import validator from 'validator';

const isValidNewsForm = ( category ) => {
    if( category.trim().length < 6 || validator.isEmpty( category ) || !validator.isAlpha( category, [ 'es-ES' ] ) || !validator.isLowercase( category ) ) {
        return {
            msgErrorCategory: 'Ingrese una categoría válida.',
            isValid: false
        };
    }

    return {
        msgErrorCategory: null,
        isValid: true
    };
};

export default isValidNewsForm;
