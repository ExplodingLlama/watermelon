import { combineReducers } from 'redux'
import albums from './albums.js'
import selectedAlbum from './selectedAlbum.js'

const photoApp = combineReducers({
    albums,
    selectedAlbum
})

export default photoApp
