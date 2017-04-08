import React from 'react'

const Button = (props) => (
  <button onClick={props.onClick} className={props.className}>
    {props.buttonLabel}
  </button>
)

export default Button
