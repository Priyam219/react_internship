import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import image from '../images/ml.jpg'
import Button from './Button'
import './card.css'

const Card = ({heading,para,link}) => {
  return (
    <div className='card-container'>
      <img src={image} alt="ml" />
      <Heading text={heading}/>
      <Paragraph content={para}/>
      <Button btnText="View More" link={link}/>
    </div>
  )
}

export default Card