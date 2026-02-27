import React from 'react'

const Profile = ({name,age,city}) => {
  return (
    <div>
        <h1>My name is {name}</h1>
        <h2>Age: {age}</h2>
        <h3>I live in {city}</h3>

    </div>
  )
}

export default Profile