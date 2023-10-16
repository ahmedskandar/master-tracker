import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ActionIconsType = {
    className: string
};

const ActionIcons = ({className}: ActionIconsType) => {
  return (
    <div className={className}>
      <FontAwesomeIcon role="button" icon={faTrash} />
      <FontAwesomeIcon role="button" icon={faCopy} />
    </div>
  );
};

export default ActionIcons;
