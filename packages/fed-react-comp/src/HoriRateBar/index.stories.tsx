import React from 'react'
import HoriRateBar, { Props } from '.'
import './index.scss'

const Template = (args: Props) => <HoriRateBar {...args} />

const props: Props = {
  data: [
    {
      label: '20-25岁',
      rate: 44,
      color: '#008CF0',
    },
    {
      label: '25-30岁',
      rate: 75,
      color: '#48D4F0',
    },
    {
      label: '35-40岁',
      rate: 12,
      color: '#97B4C9',
    },
    {
      label: '41-45岁',
      rate: 34.78,
      color: '#FFEA00',
    },
    {
      label: '45岁以上',
      rate: 88.9,
      color: '#3CC954',
    },
  ],
}
export const basic = Template.bind(props)

export default {
  title: 'HoriRateBar',
  component: HoriRateBar,
  argTypes: {
    labelColor: { control: 'color' },
    rateColor: { control: 'color' },
    barRightColor: { control: 'color' },
  },
}
