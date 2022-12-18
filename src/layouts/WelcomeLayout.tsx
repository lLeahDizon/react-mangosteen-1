import { animated, useTransition } from '@react-spring/web'
import { useLocation, useOutlet } from 'react-router-dom'
import type { ReactNode } from 'react'
import React from 'react'

const map: Record<string, ReactNode> = {}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation() // 获取当前地址栏属性
  const outlet = useOutlet()
  map[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    // 进入状态
    from: { transform: 'translateX(100%)' },
    // 稳定状态
    enter: { transform: 'translateX(0%)' },
    // 退出状态
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  })
  return transitions((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'center' }}>
        {map[pathname]}
      </div>
    </animated.div>
  })
}
