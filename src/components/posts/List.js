import React from 'react'
import axios from '../../config/axios'

import PostItem from './Item'

export default class PostsList extends React.Component{
    constructor(){
        super()
        this.state = {
            allPosts : [],
            currPagePosts :[]
        }
    }
    componentDidMount(){
        axios.get('/posts')
        .then(response=>{
            const allPosts = response.data
            this.setState({allPosts},()=>{
                const allPosts=[...this.state.allPosts]
                const currPagePosts = allPosts.splice(0,25)
                this.setState({currPagePosts})
            })
        })
    }
    handleClick1=()=> {
        const allPosts=[...this.state.allPosts]
        const currPagePosts=allPosts.splice(0,25)
        this.setState({currPagePosts})
    }
    handleClick2=()=> {
        const allPosts=[...this.state.allPosts]
        const currPagePosts=allPosts.splice(25,25)
        this.setState({currPagePosts})
    }
    handleClick3=()=> {
        const allPosts=[...this.state.allPosts]
        const currPagePosts=allPosts.splice(50,25)
        this.setState({currPagePosts})
    }
    handleClick4=()=> {
        const allPosts=[...this.state.allPosts]
        const currPagePosts=allPosts.splice(75,25)
        this.setState({currPagePosts})
    }
    handleClickMore=()=>{
        const allPosts=[...this.state.allPosts]
        const currPagePosts=allPosts.slice(100)
        this.setState({currPagePosts})
    }

    render(){
        return (
            <div>
                <h2>Posts List Page</h2>
                {this.state.currPagePosts.map((post,index)=>{
                    return (
                            <PostItem 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            />
                    )         
                })}
                <button onClick={this.handleClick1}>1</button>
                <button onClick={this.handleClick2}>2</button>
                <button onClick={this.handleClick3}>3</button>
                <button onClick={this.handleClick4}>4</button>
                <button onClick={this.handleClickMore}>>>more</button>
            </div>
        )
    }
}