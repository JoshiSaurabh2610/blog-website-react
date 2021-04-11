import { Component } from "react";
import Post from '../../components/Post/Post'
import classes from './Posts.module.css'
import axios from '../../axios'
import FullPost from '../FullPost/FullPost'
import { Route } from 'react-router-dom'
class Posts extends Component{
    
    state={
        posts:[],
        error:null,
    }

    componentDidMount=()=>{
        console.log(this.props);
        axios.get('posts').then((response)=>{
            // console.log(response);
            const posts=response.data.slice(0,5);
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
        // this.setState({
        //     selectedPostId:id,
        // })
        // push allows you to push a new page into stack  
        this.props.history.push({pathname: '/posts/'+id });
    }
    
    render(){
        let posts=<p style={{'textAlign':'center'}}>Something Went Wrong!</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                return (
                    // <Link
                    // style={{ color: 'inherit', textDecoration: 'inherit'}} 
                    //     // to={
                    //     //     {
                    //     //         pathname: '/full-post/'+post.id,
                    //     //     }
                    //     // }
                    //     to={'/full-post/'+post.id}
                    //     key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={()=>this.selectPostHandler(post.id)}/>
                    // </Link>
                )
            });
        }
        
        return(
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost}></Route>
            </div>
            
        );
    }
}

export default Posts;