const selectedAlbumId = (state = '', action) => {
    if(action.type === 'SET_SELECTED_ALBUM') {
        return action.albumId
    }
    else return state
}

export default selectedAlbumId
