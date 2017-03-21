const album = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_ALBUM':
            return {
                id: action.id,
                name: 'untitled',
                photos: []
            }
        case 'ADD_PHOTO':
            if(action.albumId != state.id) {
                return state;
            }
            return {
                ...state,
                photos: [
                    ...state.photos, action.id
                ]
            }
        case 'DELETE_PHOTO':
            return {
                ...state,
                photos: state.photos.filter(id => id!=action.photoId)
            }
        case 'RENAME_ALBUM':
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

const albums = (state = {allIds: [], byId: {}}, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
        case 'DELETE_PHOTO':
        case 'RENAME_ALBUM':
            if(state.allIds.indexOf(action.albumId) == -1) {
                return state
            }

            var oldAlbum = state.byId[action.albumId]
            var newAlbum = album(oldAlbum, action)
            var newObj = {}
            newObj[newAlbum.id] = newAlbum
            var newById = Object.assign({}, state.byId, newObj)

            return {
                allIds: state.allIds,
                byId: newById
            }

        case 'CREATE_ALBUM':
            var newAlbum = album(undefined, action)
            var newObj = {}
            newObj[newAlbum.id] = newAlbum

            return Object.assign({}, state, {
                allIds: [
                    ...state.allIds, newAlbum.id
                ],
                byId: Object.assign({}, state.byId, newObj)
            })
        case 'DELETE_ALBUM':
            if(state.allIds.indexOf(action.albumId) == -1) {
                return state
            }

            var newById = {...state.byId}
            newById[action.albumId] = undefined

            var newAllIds = state.allIds.filter(id => id!=action.albumId)

            return {
                allIds: newAllIds,
                byIds: newById
            }
        default:
            return state
    }
}

export default albums
