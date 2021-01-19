import React from 'react'
import './index.scss'

export interface Props {
  type: 'primary' | 'secondary' | 'third'
  text: string
  color: string
}

const Button: React.FC<Props> = ({ type, text, color }) => {
  return (
    <button
      data-testid='test-component-button'
      className={`btn ${type}`}
      style={{ color }}
    >
      {text}
    </button>
  )
}

export default Button
