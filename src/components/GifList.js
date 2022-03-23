import React from 'react'

const GifList = props => {
    console.log(props.gifs[2]);
    return (
        <div>
            { props.gifs.map(gif => <img key={gif.url} src={gif.url} alt='gif' />) }
        </div>
    )
}

export default GifList