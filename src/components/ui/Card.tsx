import React from 'react'
import { ChildrenProps } from '../../lib/types'


const Card = ({children}: ChildrenProps) => {
  return <div className="bg-card flex flex-col justify-center rounded-3xl p-20">{children}</div>;
}

export default Card