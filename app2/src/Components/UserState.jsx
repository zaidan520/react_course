import React from 'react'
import { useState } from 'react'
const UserState = () => {
    const [online, setonline] = useState(true)
    const IsOnline = ()=>{
        setonline(!online)
    }
  return (
    <>
     <div>
        {online ? <h1>You Online</h1>  : <h1>You offline</h1>}
        <button onClick={IsOnline}>
            {online ? <p>state: Online</p> : <p>State:offline</p>}
        </button>
     </div>
    </>
  )
}

export default UserState