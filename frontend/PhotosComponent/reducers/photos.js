const photo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
            return {
                id: action.id,
                photoLink: action.photoLink
            }
        default:
            return state
    }
}

const photos = (state = {byId: {}, allIds: []}, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
            var newPhoto = photo(undefined, action)
            var newObj = {}
            newObj[newPhoto.id] = newPhoto

            var newAllIds = [...state.allIds, newPhoto.id]
            var newById = Object.assign({}, state.byId, newObj)

            return {
                allIds: newAllIds,
                byId: newById
            }
        case 'DELETE_PHOTO':
            var newAllIds = state.allIds.filter( id => id != action.photoId )
            var newById = state.byId.filter( pht => pht.id != action.photoId )

            return {
                allIds: newAllIds,
                byId: newById
            }
        default:
            return state
    }
}

export default photos
