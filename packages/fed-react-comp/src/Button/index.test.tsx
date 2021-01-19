import React from 'react'
import { render } from '@testing-library/react'

import Button, { Props } from '.'

describe('Test Component', () => {
  let props: Props

  beforeEach(() => {
    props = {
      type: 'primary',
      text: 'whatever',
      color: '#fff',
    }
  })

  const renderComponent = () => render(<Button {...props} />)

  it('should have primary className with default props', () => {
    const { getByTestId } = renderComponent()

    const Button = getByTestId('test-component-button')

    expect(Button).toHaveClass('primary')
  })

  it('should have secondary className with type set as secondary', () => {
    props.type = 'secondary'
    const { getByTestId } = renderComponent()

    const Button = getByTestId('test-component-button')

    expect(Button).toHaveClass('secondary')
  })
})
