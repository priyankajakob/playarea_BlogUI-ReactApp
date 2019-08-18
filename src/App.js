import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import PostsList from './components/posts/List'
import AuthorsList from './components/authors/List'

import PostShow from './components/posts/Show'
import AuthorShow from './components/authors/Show'

function App(props){
    return (
        <BrowserRouter>
        <div>
            <h2>Welcome To Blog UI</h2>
            <Link to="/"> Home</Link> ||
            <Link to ="/posts"> Lists of Posts</Link> ||
            <Link to ="/authors"> Lists of Authors</Link>

            <Route path ="/posts" component={PostsList} exact={true}/>
            <Route path="/posts/:postId" component={PostShow}/>

            <Route path ="/authors" component={AuthorsList} exact={true}/>
            <Route path="/authors/:authorId" component={AuthorShow}/>

        </div>
        </BrowserRouter>
    )
}
export default App

