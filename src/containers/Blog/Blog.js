import React, { Component } from 'react';
// import axios from '../../axios'
import Toolbar from '../../components/NavBar/Toolbar/Toolbar'
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import Backdrops from '../../components/Backdrops/Backdrop'
import { Redirect, Route, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
class Blog extends Component {
    state={
        showSideDrawer:false
    }
    
    toggleSideDrawer=()=>{
        this.setState({
            showSideDrawer:!this.state.showSideDrawer
        });
    }

    render () {
        return (
            <div>
                <Toolbar toggle={this.toggleSideDrawer}
                        show={this.state.showSideDrawer}/>
                <SideDrawer toggle={this.toggleSideDrawer}
                        show={this.state.showSideDrawer}/>
                <Backdrops 
                        show={this.state.showSideDrawer}
                        cancel={this.toggleSideDrawer}/>

                {/* <Route path="/" render={()=><h1 style={{'marginTop':'100px'}}>Home2</h1>} />
                <Route path='/' exact render={()=><h1>Home</h1>} /> */}
                <Switch>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/create-post" exact component={NewPost}/>
                    <Redirect from='/' to= '/posts' />
                </Switch>
                {/* <Route path="/full-post/:id" exact component={FullPost}></Route>  Moved to posts */}
            </div>
        );
    }
}

export default Blog;