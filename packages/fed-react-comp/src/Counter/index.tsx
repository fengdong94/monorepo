import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { add5 } from 'fed-utils'

import CustomButton from './CustomButton'
import reactImg from './react.jpg'
interface Props {
  name: string
}

const Counter: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState(10)

  const handleDecrement = () => {
    setCount(() => count - 1)
  }
  const handleIncrement = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    console.log(add5(count))
  }, [count])

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
