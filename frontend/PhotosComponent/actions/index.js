const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => {
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))
  }

export const addPhoto = (photoLink, albumId) => {
    return {
        type: 'ADD_PHOTO',
        id: Object(),
        photoLink,
        albumId
    }
}

export const createAlbum = () => {
    return {
        type: 'CREATE_ALBUM',
        id: Object()
    }
}

export const renameAlbum = (albumId, name) => {
    return {
        type: 'RENAME_ALBUM',
        albumId,
        name
    }
}

export const selectAlbum = (albumId) => {
    return {
        type: 'SET_SELECTED_ALBUM',
        albumId
    }
}

export const deletePhoto = (photoId, albumId) => {
    return {
        type: 'DELETE_PHOTO',
        photoId,
        albumId
    }
}

export const deleteAlbum = (albumId) => {
    return {
        type: 'DELETE_ALBUM',
        albumId
    }
}
