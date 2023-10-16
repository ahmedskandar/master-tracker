import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIconsType } from "../../lib/types";

const ActionIcons = ({
  className,
  onDelete,
  onCopy,
}: ActionIconsType) => {
  return (
    <div className={className}>
      <FontAwesomeIcon
        className="hover:text-gray-500"
        role="button"
        onClick={onDelete}
        aria-label="delete button"
        icon={faTrash}
        title="Delete"
      />
      <FontAwesomeIcon
        className="hover:text-gray-500"
        role="button"
        onClick={onCopy}
        aria-label="copy button"
        icon={faCopy}
        title="Copy"
      />
    </div>
  );
};

export default ActionIcons;
