import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  return (
    <span
      onClick={(elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="bg-[#069C54] hover:bg-[#048654] px-3 py-2 rounded-md fixed right-4 top-[85%] cursor-pointer opacity-60 hover:opacity-70"
    >
      <FontAwesomeIcon className="text-white" icon={faAngleUp} />
    </span>
  );
};
export default ScrollToTop;
