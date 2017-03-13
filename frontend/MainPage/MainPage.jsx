import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader, small } from 'react-bootstrap';

const MainPage = React.createClass({
    render() {
        return <PageHeader> Watermelon! <small> ...with colorful seeds! </small></PageHeader>
    }
})

module.exports = MainPage;
