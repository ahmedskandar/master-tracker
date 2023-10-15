import React from 'react'
import CategoryItem from './CategoryItem'

type Props = {}

const CategoryList = (props: Props) => {
  return (
    <ul className="mt-14 hide-scroll flex flex-col gap-5 h-48 overflow-y-scroll border-r pr-2">
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ul>
  );
}

export default CategoryList