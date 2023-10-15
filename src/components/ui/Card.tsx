import React from 'react'
import { ChildrenProps } from '../../lib/types'


const Card = ({children}: ChildrenProps) => {
  return <div className="bg-card flex flex-col justify-center rounded-3xl p-10 w-11/12 sm:p-20 sm:w-10/12 sm:max-w-3xl md:max-w-4xl">{children}</div>;
}

export default Card