import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {

    state = {           //will be storing the fetched gifs in the containers state
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFS = (input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
          .then(response => response.json())
          .then( ({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
          })
    }

    componentDidMount() {
        this.fetchGIFS()
    }
}

export default GifListContainer