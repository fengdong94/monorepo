import React from 'react'
import Button from '.'

const Template = (args) => <Button {...args}></Button>

// Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  color: '#fff',
  text: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  color: '#fff',
  text: 'secondary',
}

export const Third = Template.bind({})
Third.args = {
  type: 'third',
  color: '#fff',
  text: 'third',
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
}
