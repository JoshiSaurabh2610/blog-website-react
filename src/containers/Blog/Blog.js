import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';
import axios from '../../axios'
import Toolbar from '../../components/NavBar/Toolbar/Toolbar'
class Blog extends Component {
    state={
        posts:[],
        selectedPostId:null,
        error:null,
    }

    componentDidMount=()=>{
        axios.get('posts').then((response)=>{
            // console.log(response);
            const posts=response.data.slice(0,4);
            const updatedPosts=posts.map(post=>{
                return {
                    ...post,
                    author: 'Saurabh'
                }
            })
            this.setState({
                posts:updatedPosts,
            })
        }).catch(error=>{
            this.setState({error:error});
        })
    }
    selectPostHandler=(id)=>{
        this.setState({
            selectedPostId:id,
        })
    }
    render () {
        let posts=<p style={{'textAlign':'center'}}>Something Went Wrong!</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={()=>this.selectPostHandler(post.id)}/>
            });
        }
        return (
            <div>
                <Toolbar />
                <section className={classes.Posts}>
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;