import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state={
        postLoaded:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.postLoaded||(this.state.postLoaded&&this.props.id!==this.state.postLoaded.id)){
                axios.get('posts/'+this.props.id).then(
                    (response)=>{
                        this.setState({
                            postLoaded:response.data
                        })
                    }
                )
            }
        }
    }

    deleteHandler=()=>{
        axios.delete('posts/'+this.props.id).then(
            response=>{
                console.log(response);
            }
        )
    }
    render () {
        let post = <p style={{'textAlign':'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{'textAlign':'center'}}>Loading....</p>;
        }
        if(this.state.postLoaded){
            post = (
                <div className="FullPost">
                    <h1>{this.state.postLoaded.title}</h1>
                    <p>{this.state.postLoaded.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;