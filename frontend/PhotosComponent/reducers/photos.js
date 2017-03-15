const photo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PHOTO':
            return {
                id: action.id,
                photoLink: action.id
            }
        default:
            return state
    }
}

const photos = (state = {}, action) => {
    
}

export default photos
