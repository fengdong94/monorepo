import React from 'react'

interface Data {
  label: string
  rate: number
  color: string
}

export interface Props {
  barMarginBottom?: string
  fontSize?: string
  textMarginBottom?: string
  labelColor?: string
  rateColor?: string
  barHeight?: string
  barGap?: string
  barRightColor?: string
  data: Array<Data>
}

// 水平方向展示百分比的柱状图组件
const HoriRateBar: React.FC<Props> = ({
  barMarginBottom = '22px',
  fontSize = '12px',
  textMarginBottom = '4px',
  labelColor = '#8C8C8C',
  rateColor = '#262626',
  barHeight = '16px',
  barGap = '4px', // 同一个 bar 上左右两边的间距
  barRightColor = '#ececec', // bar 右边颜色
  data = [
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
}) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          className='hori-rate-bar'
          key={item.label}
          style={{
            marginBottom: index === data.length - 1 ? 0 : barMarginBottom,
          }}
        >
          <div
            className='hori-rate-bar-text'
            style={{ fontSize, marginBottom: textMarginBottom }}
          >
            <span
              className='hori-rate-bar-text-label'
              style={{ color: labelColor }}
            >
              {item.label}
            </span>
            <span
              className='hori-rate-bar-text-rate'
              style={{ color: rateColor }}
            >
              {item.rate}%
            </span>
          </div>
          <div className='hori-rate-bar-block' style={{ height: barHeight }}>
            {item.rate > 0 && (
              <div
                className='hori-rate-bar-block-left'
                style={{
                  width: `${item.rate}%`,
                  marginRight: item.rate < 100 ? barGap : 0,
                }}
              >
                <div
                  className='hori-rate-bar-block-left-animation'
                  style={{ background: item.color }}
                />
              </div>
            )}
            <div
              className='hori-rate-bar-block-right'
              style={{ background: barRightColor }}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default HoriRateBar
