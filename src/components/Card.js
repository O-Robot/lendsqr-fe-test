import React from 'react'

const Card = ({image, title, content}) => {
  return (
    <div className='card'>
        <img className='card-icon' src='{image}' alt='card-icon' />
        <h5>{title}</h5>
        <p>{content}</p>
      
    </div>
  )
}

export default Card
