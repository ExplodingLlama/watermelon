import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import photoApp from './reducers'
import App from './components/App.jsx'

let store = createStore(photoApp)

const PhotosComponent = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
})

export default PhotosComponent
