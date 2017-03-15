const album = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_ALBUM':
            return {
                id: action.id,
                name: untitled,
                photos: []
            }
        case 'ADD_PHOTO':
            if(action.albumId != state.id) {
                return state
            }
            return {
                ...state,
                {
                    photos: [
                        ...state.photos, action.id
                    ]
                }
            }
        case 'DELETE_PHOTO':
            return {
                ...state,
                {
                    photos: state.photos.filter(id => id!=action.photoId)
                }
            }
        case 'RENAME_ALBUM':
            return {
                ...state,
                {
                    name: action.name
                }
            }
    }
}

const albums = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
            if(state.allIds.indexOf(action.albumId) == -1) {
                return state
            }

            album(state.byId
    }
}

export default albums
