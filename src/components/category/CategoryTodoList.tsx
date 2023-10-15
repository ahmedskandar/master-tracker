import CategoryTodoItem from './CategoryTodoItem';

type Props = {}

const CategoryTodoList = (props: Props) => {
  return (
    <ul className="py-2 px-8 bg-white flex flex-col gap-3">
      <CategoryTodoItem />
      <CategoryTodoItem />
      <CategoryTodoItem />
    </ul>
  );
}

export default CategoryTodoList