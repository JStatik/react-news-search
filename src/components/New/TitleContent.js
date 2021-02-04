import React from 'react';
import PropTypes from 'prop-types';
import { source_styles, title_styles } from './New.module.css';

const TitleContent = ( { source, title } ) => {
    return (
        <>
            <span className={ source_styles }>{ source }</span>
            <h5 className={ `flow-text ${ title_styles }` }>{ title }</h5>
        </>
    );
};

TitleContent.propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default TitleContent;
