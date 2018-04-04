import React from 'react'
import './userOutput.css'

const userOutput = (props) => {
return (
  <div className="userOutput">
    <p>Username : {props.username}</p>
    <p>Random Text 2</p>
  </div>
)
}

export default userOutput 