import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

function App(props){
    return (
        <BrowserRouter>
        <div>
            <h2>Welcome To Blog UI.</h2>
            <Link to="/"> Home</Link> ||
            <Link to ="/posts"> Lists of Posts</Link> ||
            <Link to ="/authors"> Lists of Authors</Link>

        </div>
        </BrowserRouter>
    )
}
export default App

