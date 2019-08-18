import React from 'react'
import axios from '../../config/axios'
import AuthorItem from './Item'

export default class AuthorsList extends React.Component{
    constructor(){
        super()
        this.state = {
            authors : []
        }
    }
    componentDidMount(){
        axios.get('/users')
        .then(response=>{
            const authors = response.data
            this.setState({authors})
        })
    }
    render(){
        return (
            <div>
                <h2>Authors List Page</h2>
                {this.state.authors.map(author=>{
                return (
                        <AuthorItem 
                        key={author.id}
                        id={author.id}
                        name={author.name}
                        />
                    )       
                })}
            </div>
        )
    }
}