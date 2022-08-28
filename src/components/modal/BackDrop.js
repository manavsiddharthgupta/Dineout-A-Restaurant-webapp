const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-[#000000d1] fixed top-0 left-0 w-full h-full z-30"
    ></div>
  );
};
export default BackDrop;
