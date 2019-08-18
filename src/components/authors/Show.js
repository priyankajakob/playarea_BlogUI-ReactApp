import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'

const divStyle = {
    backgroundColor : 'lightGrey'
}
export default class AuthorShow extends React.Component {
    constructor(){
        super()
        this.state = {
            author : {},
            isLoading : true
        }
    }

    componentDidMount(){
        const authorId = this.props.match.params.authorId
        axios.get(`/users/${authorId}`)
        .then(response=>{
            const author = response.data
            this.setState({author,isLoading:false})

        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
        <div>
            {this.state.isLoading ? (<h3>Loading...</h3>) : 
             (
                <div style={divStyle}>
                <h3>{this.state.author.name} ({this.state.author.username})</h3>
                {/* I have a doubt here on how to implement below link in react as currently when it is clicked, it goes to localhost:3000/authors/<websitename> instead of direct url to website */}
                {/* <h3>You can find more about me at the link - <a href = {this.state.author.website}>{this.state.author.website}</a></h3> */}
                <h3>{this.state.author.website && (`You can find more about me at the link - `+ this.state.author.website)}</h3>
                </div>
            ) }
            <Link to="/authors">Back to Authors</Link>
        </div>
            
        )
    }
}