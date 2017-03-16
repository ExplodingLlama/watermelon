import React from 'react'
import MainMode from '../containers/MainMode.js'
import AlbumMode from '../containers/AlbumMode.js'
import CreateAlbum from '../containers/CreateAlbum.jsx'

const App = React.createClass({
    render() {
        if(this.props.selectedAlbumId == ''){
            return <MainMode />
        else return <AlbumMode />
        }
    }
})
