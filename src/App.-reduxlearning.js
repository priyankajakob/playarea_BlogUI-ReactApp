import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Count from './components/Count'
import Todo from './components/Todo'
import UsersList from './components/UsersList'
import UserShow from './components/UserShow'

function App(props){
    return (
        <BrowserRouter>
            <div>
                <h2>Redux Users</h2>
                <ul>
                    <li><Link to="/count">Count</Link></li>
                    <li><Link to="/todos">Todo</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
                <Route path="/count" component={Count}/>
                <Route path="/todos" component={Todo}/>
                <Route path="/users" component={UsersList} exact={true}/>
                <Route path="/users/:id" component={UserShow}/>
            </div>
        </BrowserRouter>
    )
}
export default App

