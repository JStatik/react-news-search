import React from 'react';
import PropTypes from 'prop-types';
import { card_action_styles } from './New.module.css';

const CardAction = ( { url } ) => {
    return (
        <div className={ `card-action center ${ card_action_styles }` }>
            <a
                href={ url }
                target="_blank"
                rel="noreferrer"
                className="waves-effect waves-light btn pink darken-4"
            >
                Ver noticia completa
            </a>
        </div>
    );
};

CardAction.propTypes = {
    url: PropTypes.string.isRequired
};

export default CardAction;
