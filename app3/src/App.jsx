import { useState } from 'react'

import './App.css'
import Card from './card'
function App() {
  const [color, setcolor] = useState("Blue")

  return (
    <>
    <body style={{backgroundColor: color}}>
      <div className='w-full flex flex-wrap gap-3 justify-center bg-white rounded-2xl h-full'>
      <button className='bg-green-500 text-white shadow-lg ' onClick={()=> setcolor("green")}>Green</button>

       <button className='bg-red-500 text-white  shadow-lg ' onClick={()=> setcolor("red")}>red</button>

        <button className='bg-blue-500 text-white shadow-lg  ' onClick={()=> setcolor("blue")}>Blue</button>

         <button className='bg-amber-700 text-white  shadow-lg ' onClick={()=> setcolor("olive")}>amber</button>

          <button className='bg-gray-500 text-white shadow-lg  ' onClick={()=> setcolor("gray")}>gray</button>

           <button className='bg-yellow-500 text-white shadow-lg ' onClick={()=> setcolor("yellow")}>yellow</button>

           <button className='bg-pink-500 text-white shadow-lg  ' onClick={()=> setcolor("pink")}>pink</button>

           <button className='bg-white text-black shadow-lg  ' onClick={()=> setcolor("white")}>white</button>

          

           </div>
      
      
   
      
    
    <div className='w-full bg-amber-300'>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwindcss</h1>
    <Card username= "ali card"  />
    <Card username= "zaidan card"/>
   </div>

   </body>
    </>
  )
}

export default App
