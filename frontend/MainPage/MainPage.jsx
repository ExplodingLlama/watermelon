import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader, small } from 'react-bootstrap';

import PhotosComponent from '../PhotosComponent/PhotosComponent.jsx'
import TodoList from '../TodoList/TodoList.jsx'

const MainPage = React.createClass({
    render() {
        return <div>
            <PageHeader> Watermelon! <small> ...with colorful seeds! </small></PageHeader>
            <PhotosComponent />
        </div>

    }
})

module.exports = MainPage
