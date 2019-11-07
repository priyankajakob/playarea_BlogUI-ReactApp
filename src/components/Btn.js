import React from 'react'
import {increment,decrement} from '../actions/count'
import { connect } from 'react-redux';

function Btn(props){
    return (
         <div>
             <button onClick={()=>{
                props.dispatch(increment())
            }}>Up</button>
            <button onClick={()=>{
                props.dispatch(decrement())
            }}>Down</button>
         </div>    
    )
}
export default connect()(Btn)