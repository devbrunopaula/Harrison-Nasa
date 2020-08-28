import React from 'react'
import styled from 'styled-components'

function Photo({ photo }) {




    return (
        <div>
            {photo.media_type === 'image' ? <PhotoStyle tt src={photo.url} alt="" /> : <iframe width="560" height="315" src={photo.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}


        </div>
    )
}

export default Photo


const PhotoStyle = styled.img`
    height: 200px;
    width: 200px;
    border: 5px solid;
    border-color: ${ props => props.tt ? 'red' : 'yellow'};
    
    `