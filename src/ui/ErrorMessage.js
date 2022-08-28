import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const ErrorMessage = (props) => {
  return (
    <p className="text-xs font-light text-red-600">
      <FontAwesomeIcon icon={faCircleExclamation} /> {props.children}
    </p>
  );
};
export default ErrorMessage;
