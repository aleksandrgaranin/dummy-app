import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost'


import './Blog.css';


class Blog extends Component {  
    render () { 
        return (
            <div>
                <div className="Blog">
                     <header>
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</Link></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={()=> <Posts/>}/>
                    <Route path="/" render={()=> <h1>Home2</h1>}/> */}
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                </div>    
            </div>
        );
    }
}

export default Blog;