import CategoryList from "./CategoryList";
import CategoryForm from "./CategoryForm";

type Props = {}

const Category = (props: Props) => {
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:gap-6 md:justify-between">
        <CategoryForm />
        <input
          type="text"
          className="pl-4 rounded-md h-12"
          placeholder="Search..."
        />
      </div>
      <CategoryList />
    </div>
  );
}

export default Category