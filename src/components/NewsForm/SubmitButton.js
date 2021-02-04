import React from 'react';
import PropTypes from 'prop-types';
import { btn_block } from './NewsForm.module.css';

const SubmitButton = ( { disabled } ) => {
    return (
        <div className="input-field col s12" style={ { marginBottom: 10 } }>
            <button
                type="submit"
                className={ `waves-effect waves-light btn-large pink darken-4 ${ btn_block }` }
                disabled={ disabled }
            >
                Buscar
            </button>
        </div>
    );
};

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
