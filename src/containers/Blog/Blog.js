import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import './Blog.css';


class Blog extends Component {  
    render () { 
        return (
            <div>
                <div className="Blog">
                     <header>
                        <nav>
                            <ul>
                                <li><NavLink 
                                    to="/posts/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                >Posts</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    {/* <Route path="/" exact render={()=> <Posts/>}/>
                    <Route path="/" render={()=> <h1>Home2</h1>}/> */}
                    <Switch>
                        <Route path="/new-post"  component={NewPost}/>
                        <Route path="/posts/"  component={Posts}/>                    
                                                
                    </Switch>
                    
                </div>    
            </div>
        );
    }
}

export default Blog;