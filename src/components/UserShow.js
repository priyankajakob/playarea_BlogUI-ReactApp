import React from 'react'
import {connect} from 'react-redux'

function UserShow(props){
    return (
        <div>
            <h2>{props.user.name}</h2>
        </div>
    )
}

const mapStateToProps = (state, props)=>{
    return {
        user : state.users.find(user=>user.id===Number(props.match.params.id))
    }
}

export default connect(mapStateToProps)(UserShow)