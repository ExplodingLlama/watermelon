import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App.jsx'

let store = createStore(todoApp)

const TodoList = React.createClass({
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
})

export default TodoList
