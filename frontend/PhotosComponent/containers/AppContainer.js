import { connect } from 'react-redux'
import App from '../components/App.jsx'

const mapStateToProps = (state) => {
    return {
        selectedAlbumId: state.selectedAlbumId
    }
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer
