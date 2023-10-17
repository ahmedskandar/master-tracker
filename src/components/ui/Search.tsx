import { SearchType } from "../../lib/types";


const Search = ({onSearchInputChange}: SearchType) => {
  return (
    <input
      onChange={onSearchInputChange}
      type="text"
      className="pl-4 rounded-md h-12"
      placeholder="Search..."
    />
  );
}

export default Search