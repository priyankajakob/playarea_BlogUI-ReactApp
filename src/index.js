//es6 module loaders - react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux' //npm install --save react-redux
import {startSetUsers} from './actions/users'

import configureStore from './store/configureStore'
const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(startSetUsers())

const ele = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele,document.getElementById('root'))