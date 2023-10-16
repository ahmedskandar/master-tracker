import { ToasterType } from "../../lib/types";

const Toaster = ({ message, onClose }: ToasterType) => {
  return (
    <div className="toaster">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Toaster;
