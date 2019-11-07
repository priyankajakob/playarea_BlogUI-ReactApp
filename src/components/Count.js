import React from 'react'
import { connect } from 'react-redux'
import Btn from './Btn'

function Count(props){
    console.log(props)
    return (
        <div>
            <h3>Count -> {props.count}</h3>
            <Btn/>
        </div>
    )
}

//higher order function - a function which takes another function as argument or returns a function.

//higher order component - a component that takes another component as an argument or return a component.

//returned component from a HOC is known as a "wrapped component"
const mapStateToProps=(state)=>{
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count)
