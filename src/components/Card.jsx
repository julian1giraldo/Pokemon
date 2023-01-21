import React from 'react'
import '../sass/Card.scss'

const Card = ({name, img}) => {
  return (
    <div className='card'>
      <p className='card__name'>{name}</p>
      <div className='card__circulo'></div>
      <img className='card__img' src={img} alt="pokemon img" loading="lazy"/>
    </div>
  )
}

export {Card}
