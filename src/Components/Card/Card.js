import React from 'react'
import './Card.css'

const Card = props => {
  const {frontImg, back, flipped, onClick} = props
  const img = flipped ? frontImg : back
  return (
    <div className="Card" onClick={onClick}>
      <img src={img} alt=""/>
    </div>
  )
}

export default Card