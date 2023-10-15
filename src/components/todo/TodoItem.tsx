import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const TodoItem = (props: Props) => {
  return (
    <li className="bg-todo-item rounded-lg py-4 px-8 flex justify-between">
      <div className="flex gap-5">
        <input type="checkbox" />
        <p>Take puppy for a walk</p>
      </div>
      <p>Category: Priority</p>
      <div className="flex items-center gap-8 text-xl">
        <FontAwesomeIcon role="button" icon={faTrash} />
        <FontAwesomeIcon role="button" icon={faCopy} />
      </div>
    </li>
  );
};

export default TodoItem;
