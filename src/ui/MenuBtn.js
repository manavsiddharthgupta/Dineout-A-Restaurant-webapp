const MenuBtn = (props) => {
  return (
    <button
      className={`rounded-lg hover:bg-[#048654] hover:text-white duration-300 ease-in-out ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default MenuBtn;
