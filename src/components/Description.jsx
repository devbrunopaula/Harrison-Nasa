import React from 'react'

function Description({ photo }) {
    return (
        <div>
            <h1>{photo.title}</h1>
            <p>{photo.explanation}</p>
        </div>
    )
}

export default Description
