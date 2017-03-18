import React from 'react'
import MainModeContainer from '../containers/MainModeContainer.js'
import AlbumModeContainer from '../containers/AlbumModeContainer.js'

const App = React.createClass({
    render() {
        if(this.props.selectedAlbumId == '') return <MainModeContainer />
        else return <AlbumModeContainer />
    }
})

export default App
