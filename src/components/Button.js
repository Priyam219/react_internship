import React from 'react'

const Button = ({btnText,link}) => {
  return (
    <a  href={link}> <button >{btnText}</button></a>
  )
}

export default Button