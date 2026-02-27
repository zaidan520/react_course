import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import UserState from './Components/UserState'

function App() {
  let [counter, setcounter] = useState(5)
  const students = ["Ali", "Hamza", "Zaid", "Ahsan"];

  
const addvalue = ()=>{
  //console.log("value added", Math.random())
  counter = counter +1 ;
  if(counter >= 20)
  {
    console.log("counter is 20")
    counter = 0
  }
  //console.log("value added", counter)
  setcounter(counter)
}
const remove_value = ()=>{
  counter = counter -1
  if( counter == -1)
  {
    counter =0;
  }
  setcounter(counter)
}
  return (
    <>
    <UserState/>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <button onClick={remove_value}>Remove value</button>
    <Profile name = " Ali Zaidan" city = "FSD" age = "22"/>
    <Profile name = " Ali hassan" city = "FSD" age = "20"/>
    {students.map((students)=>
    <p>
      {students}
    </p>
    )}
   
    </>

  )
}

export default App
