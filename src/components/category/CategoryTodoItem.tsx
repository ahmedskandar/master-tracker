import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {};

const CategoryTodoItem = (props: Props) => {
  return (
    <li className="flex justify-between">
      <p>Todo n</p>
      <div className="space-x-5">
        <FontAwesomeIcon role="button" aria-label="Delete..." title="Delete..." icon={faTrash} />
        <FontAwesomeIcon role="button" aria-label="Copy..." title="Copy..." icon={faCopy} />
      </div>
    </li>
  );
};

export default CategoryTodoItem;
