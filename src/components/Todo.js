import React from 'react'
import { connect } from 'react-redux';
import {addTodo,removeTodo} from '../actions/todo'

function Todo(props){
    return (
        <div>
            <h3>{props.title} = {props.todo.length}</h3>
            <ul>
            {props.todo.map(todo=>{
                return (
                    <div key={todo.id}>
                    <li key={todo.id}>{todo.title}</li>
                    <button onClick={()=>{
                        const confirm = window.confirm('Are you sure?')
                        if(confirm){
                            props.dispatch(removeTodo(todo.id))
                        }
                    }}>Remove todo</button> ||
                    <button onClick={()=>{
                        window.alert(todo.title)
                    }}>Show todo</button>
                    </div>
                )
            })}
            </ul>
            <br/>
            <button onClick={()=>{
                const title = window.prompt('enter the title')
                if(title){
                    const todo = {
                        id:Number(new Date()),
                        title
                    }
                    props.dispatch(addTodo(todo))
                }
            }}>Add Todo</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        todo:state.todo,
        title:'Showing todos'
    }
}
export default connect(mapStateToProps)(Todo)