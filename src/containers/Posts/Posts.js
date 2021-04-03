import { Component } from "react";
import Post from '../../components/Post/Post'
import classes from './Posts.module.css'
import axios from '../../axios'

class Posts extends Component{
    
    state={
        posts:[],
        error:null,
    }

    componentDidMount=()=>{
        axios.get('posts').then((response)=>{
            // console.log(response);
            const posts=response.data.slice(0,10);
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
    
    render(){
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
        return(
            <section className={classes.Posts}>
                    {posts}
            </section>
        );
    }
}

export default Posts;