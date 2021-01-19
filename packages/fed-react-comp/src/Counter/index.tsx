import React, { useState } from 'react'
import { Button } from 'antd'
import 'antd/es/button/style/index.css'

import CustomButton from './CustomButton'
import './index.scss'
import reactImg from './react.jpg'
interface Props {
  name: string
}

// console.log(add(2, 2))
const Counter: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(10)

  const handleDecrement = () => {
    const vsd = 'cxx'
    setCount((count) => count + 1)
  }
  const handleIncrement = () => {
    setCount((count) => count - 1)
  }

  return (
    <div className='counter-container'>
      <img src={reactImg} />
      <Button type='primary' onClick={handleDecrement}>
        decrement
      </Button>
      <div className='counter-content'>
        {name}: {count}
      </div>
      <CustomButton text='increment' onClick={handleIncrement} />
    </div>
  )
}

export default Counter
