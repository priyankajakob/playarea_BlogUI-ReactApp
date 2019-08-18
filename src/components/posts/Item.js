import React from 'react'
import {Link} from 'react-router-dom'

export default function PostItem(props){
    return (
        <li>
            <Link to={`/posts/${props.id}`}>{props.title}</Link>
        </li>
            
    )
}