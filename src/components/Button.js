const Button = (props) => {
  return (
    <button
      className={`rounded-lg bg-[#069C54] hover:bg-[#048654] text-white duration-300 ease-in-out ${props.className}`}
      onClick={props.onClick}
      type={props.type === "" ? "button" : props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
