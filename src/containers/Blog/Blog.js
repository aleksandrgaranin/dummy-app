import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost';
import './Blog.css';

const AsyncComponent = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

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
                        <Route path="/new-post"  component={AsyncComponent}/>
                        <Route path="/posts"  component={Posts}/>
                        <Redirect from="/" to="/posts"/>
                    </Switch>
                    
                </div>    
            </div>
        );
    }
}

export default Blog;