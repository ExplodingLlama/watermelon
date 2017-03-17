import { connect } from 'react-redux'
import { addPhoto, deletePhoto, selectAlbum } from '../actions'
import AlbumMode from '../components/AlbumMode.jsx'

const getCurrentAlbumData = (state) => {
    return state.albums.byId[state.selectedAlbumId]
}

const getCurrentPhotoData = (state) => {
    var photoIds = state.albums.byId[state.selectedAlbumId].photos
    var photos = state.photos.byId.filter(pht => photoIds.indexOf(pht.id)>-1)
    return photos
}

const mapStateToProps = (state) => {
    return {
        album: getCurrentAlbumData(state),
        photos: getCurrentPhotoData(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        backToMainMode: (() => {
            dispatch(selectAlbum(''))
        }),
        addPhoto: ((photoLink, albumId)=>{
            dispatch(addPhoto(photoLink, albumId))
        }),
        deletePhoto: ((photoLink, albumId)=>{
            dispatch(deletePhoto(photoLink, albumId))
        })
    }
}

const AlbumModeContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumMode)

export default AlbumModeContainer
