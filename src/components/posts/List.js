import React from 'react'
import axios from '../../config/axios'

import PostItem from './Item'

export default class PostsList extends React.Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('/posts')
        .then(response=>{
            const posts = response.data
            this.setState({posts})
        })
    }

    render(){
        return (
            <div>
                <h2>Posts List Page</h2>
                {this.state.posts.map(post=>{
                    return (
                            <PostItem 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            />
                    )         
                })}
            </div>
        )
    }
}