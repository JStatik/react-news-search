import React from 'react';
import PropTypes from 'prop-types';

const BodyContent = ( { description } ) => {
    return (
        <p className="truncate">
            {
                description === ''
                    ?
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    :
                description
            }
        </p>
    );
};

BodyContent.propTypes = {
    description: PropTypes.string.isRequired
};

export default BodyContent;
