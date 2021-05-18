import React from 'react'
import PropTypes from 'prop-types'

function Load({onClick}) {
    return (
        <div>
            <h1>Get a Simpson's Quote</h1>
            <button onClick={onClick}>Load Quote</button>
        </div>
    )
}

Load.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Load


