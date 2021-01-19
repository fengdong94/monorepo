import React from 'react'
import './CustomButton.scss'

interface Props {
  text: string
  onClick: () => void
}

const CustomButton: React.FC<Props> = ({ text, onClick }) => (
  <button className='custom-button' onClick={onClick}>
    {text}
  </button>
)

export default CustomButton
