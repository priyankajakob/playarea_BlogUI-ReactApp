import React from 'react'
import {Link} from 'react-router-dom'

export default function AuthorItem(props){
    return (
        <li>
            <Link to={`/authors/${props.id}`}>{props.name}</Link>
        </li>
            
    )
}