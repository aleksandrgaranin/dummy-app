import React, { Component } from 'react';
import Post from '../../../components/Post/Post'
import axios from '../../../axios'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts =response.data.slice(0, 4);
                const updatedPosts = posts.map(post =>{
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts:updatedPosts});
                //console.log(updatedPosts);
            }).catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
        
    }

    postSelectedHandler = (id)=> {
        this.setState({selectedPostId: id});
    }

    render(){
        let posts = <p style={{textAlign:'center'}}>Something went wrong!</p>;
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={()=> this.postSelectedHandler(post.id)
                }
            />
        })
        }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>      
            </div>             
        );
    }
}

export default Posts;