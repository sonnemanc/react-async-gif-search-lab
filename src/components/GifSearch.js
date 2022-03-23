import React from 'react'

class GifSearch extends React.Component {

    state = {
        input: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.fetchGIFs(this.state.input)
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.input} onChange={event => this.setState({input: event.target.value})} />
            </form>
          </div>
        )
      }
}

export default GifSearch