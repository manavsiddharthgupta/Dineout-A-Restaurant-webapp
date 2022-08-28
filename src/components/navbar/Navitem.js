const Navitem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className="cursor-pointer font-medium hover:text-[#069C54]"
    >
      {props.children}
    </li>
  );
};

export default Navitem;
