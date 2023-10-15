import React from 'react'
import CategoryItem from './CategoryItem'

type Props = {}

const CategoryList = (props: Props) => {
  return (
    <ul>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ul>
  )
}

export default CategoryList