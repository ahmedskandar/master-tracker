import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIconsType } from "../../lib/types";

const ActionIcons = ({
  className,
  onDeleteTodo,
  onCopyTodo,
}: ActionIconsType) => {
  return (
    <div className={className}>
      <FontAwesomeIcon
        role="button"
        onClick={onDeleteTodo}
        aria-label="delete button"
        icon={faTrash}
        title="Delete"
      />
      <FontAwesomeIcon
        role="button"
        onClick={onCopyTodo}
        aria-label="copy button"
        icon={faCopy}
        title="Copy"
      />
    </div>
  );
};

export default ActionIcons;
