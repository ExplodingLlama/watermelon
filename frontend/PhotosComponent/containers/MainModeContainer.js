import { connect } from 'react-redux'
import { createAlbum, deleteAlbum, selectAlbum } from '../actions'
import MainMode from '../components/MainMode.jsx'

const mapStateToProps = (state) => {
    return {
        albums: state.albums,
        photos: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAlbum: ((id) => {
            dispatch(selectAlbum(id))
        }),
        createAlbum: (()=>{
            dispatch(createAlbum())
        }),
        deleteAlbum: ((id)=>{
            dispatch(deleteAlbum(id))
        })
    }
}

const MainModeContainer = connect(mapStateToProps, mapDispatchToProps)(MainMode)

export default MainModeContainer
