import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

const divStyle = {
    backgroundColor: 'skyBlue'
}

const commentsStyle = {
    backgroundColor: 'lightgrey'
}

export default class PostShow extends React.Component{
    constructor(){
        super()
            this.state = {
                post:{},
                comments:[]
            }
    }
    componentDidMount(){
        const postId = this.props.match.params.postId
         axios.get(`/posts/${postId}`)
        .then(response=>{
            const post=response.data
            this.setState({post},()=>{
                //call to get the username
                axios.get(`/users/${post.userId}`)
                .then(response=>{
                   const postData = {...post}
                   postData.userName=response.data.username
                    this.setState({
                        post : postData
                       },()=>{
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
            })
        })
        .catch(err=>{
            console.log(err)
        })

        //call to get the comments for the posts
        axios.get(`/comments/?postId=${postId}`)
        .then(response=>{
            const comments = response.data
            this.setState({comments})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <h2>Post Show Page</h2>
                <div style={divStyle}>
                    <h2>{this.state.post.title}</h2>
                    <h4>
                     { 
                       (this.state.post.userName) 
                        && 
                      ( <Link to={`/authors/${this.state.post.userId}`}> {this.state.post.userName} </Link> 
                       )
                    }
                    </h4>
                    <p>{this.state.post.body}</p>
                </div>
                {this.state.comments.map((comment,index) => {
                    return (
                        <div key={index}> 
                            <h4>Comment {index + 1}</h4>
                            <div style={commentsStyle}>
                                <h5>{comment.name}</h5>
                                <h5>{comment.email}</h5>
                                <h5>{comment.body}</h5>
                            </div>
                        </div>

                    )
                })}
                <Link to="/posts">Back to Posts</Link>
            </div>
        )
    }
}