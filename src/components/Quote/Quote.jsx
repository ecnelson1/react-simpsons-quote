import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({character, image, quote}) => (
        <figure>
            <img src={image} alt={character}/>
            <figcaption>{quote} -{character}</figcaption>
        </figure>
);

Quote.propTypes = {
    character: PropTypes.any.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

};

export default Quote

