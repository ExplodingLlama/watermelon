import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import photoApp from './reducers'
import AppContainer from './containers/AppContainer.js'

let store = createStore(photoApp)

const PhotosComponent = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
})

export default PhotosComponent
