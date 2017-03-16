import { combineReducers } from 'redux'
import albums from './albums.js'
import photos from './photos.js'
import selectedAlbumId from './selectedAlbumId.js'

const photoApp = combineReducers({
    albums,
    photos,
    selectedAlbumId
})

export default photoApp
