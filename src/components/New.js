import React from 'react';
import PropTypes from 'prop-types';
import { container_card, card_content_styles } from './New/New.module.css';
import CardAction from './New/CardAction';
import CardImage from './New/CardImage';
import BodyContent from './New/BodyContent';
import TitleContent from './New/TitleContent';

const New = ( { new: newAPI } ) => {
    const { description, source, title, url, urlToImage } = newAPI;
    const sliceTitle = title.length > 60 ? `${ title.slice( 0, 57 ) }...` : title;

    return (
        <div className={ `col s12 m6 l3 ${ container_card }` }>
            <div className="card hoverable" style={ { marginTop: 0 } }>
                <CardImage
                    image={ urlToImage ? urlToImage : '' }
                    title={ sliceTitle }
                />

                <div className={ `card-content ${ card_content_styles }` }>
                    <TitleContent
                        source={ source.name }
                        title={ sliceTitle }
                    />

                    <BodyContent description={ description ? description : '' } />
                </div>

                <CardAction url={ url } />
            </div>
        </div>
    );
};

New.propTypes = {
    new: PropTypes.object.isRequired
};

export default New;
