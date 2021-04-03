import React, { Component } from 'react';
// import axios from '../../axios'
import Toolbar from '../../components/NavBar/Toolbar/Toolbar'
import Posts from '../Posts/Posts';
class Blog extends Component {
    render () {
        return (
            <div>
                <Toolbar />
                <Posts/>
            </div>
        );
    }
}

export default Blog;