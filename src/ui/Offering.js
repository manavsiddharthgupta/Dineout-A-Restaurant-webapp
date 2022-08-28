import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offering = (props) => {
  return (
    <div className="mt-8 px-10">
      <FontAwesomeIcon icon={props.icn} size="4x" color="#069C54" />
      <h2 className="text-[1.25em] font-semibold mt-4">{props.title}</h2>
      <p className="px-[2%] lg:px-0 font-light mt-2 text-[0.95em] leading-6">
        {props.descpt}
      </p>
    </div>
  );
};
export default Offering;
