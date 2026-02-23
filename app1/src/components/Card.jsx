import React from 'react'

const Card = (props) => {
  return (
    <>
    <div >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaSQSRQn5t07ck-wujys5dP_CSovkQiBK3rsxsybj1K74cIkQ_nRwSR5iHtTr_DsuiSk&usqp=CAU" alt="Car Image" />
    </div>
    
    <div>
      <h1>{props.title}</h1>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ut. Odio voluptatem cupiditate neque sit dignissimos ullam repellendus, laudantium est deserunt magni sequi omnis soluta doloribus obcaecati debitis iusto molestiae?</p>
    <button>Learn More</button>
    </>
  )
}

export default Card