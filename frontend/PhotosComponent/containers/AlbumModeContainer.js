import { connect } from 'react-redux'
import { addPhoto, deletePhoto, selectAlbum } from '../actions'
import AlbumMode from '../components/AlbumMode.jsx'

const getCurrentAlbumData = (state) => {
    return state.albums.byId[state.selectedAlbumId]
}

const getCurrentPhotoData = (state) => {
    if(!state.selectedAlbumId) return {}

    var photoIds = state.albums.byId[state.selectedAlbumId].photos;
    var photos = [];

    for( let photo of Object.values(state.photos.byId) ) {
        if(photo && photo.id && photoIds.indexOf(photo.id) > -1){
            photos.push(photo);
        }
    }

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
