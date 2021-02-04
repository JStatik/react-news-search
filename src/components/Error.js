import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { height, size, error } ) => {
    return (
        <div className="container-error" style={ { height: height } }>
            <p className="msg-error" style={ { fontSize: size } }>{ error }</p>
        </div>
    )
}

Error.propTypes = {
    height: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
}

export default Error
