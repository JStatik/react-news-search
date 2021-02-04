import React from 'react';
import PropTypes from 'prop-types';
import { card_image_styles } from './New.module.css';

const CardImage = ( { image, title } ) => {
    return (
        <div className={ `card-image ${ card_image_styles }` }>
            {
                image.includes( 'https' )
                    ?
                <img src={ image } alt={ title } height="120px"/>
                    :
                <img src="./assets/img/news.jpg" alt="News" height="120px"/>
            }
        </div>
    );
};

CardImage.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default CardImage;
