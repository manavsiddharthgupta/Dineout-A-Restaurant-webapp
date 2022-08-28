const SubTitle = (props) => {
  return (
    <h1 className={`font-semibold text-2xl mt-5 ${props.className}`}>
      {props.children}
    </h1>
  );
};
export default SubTitle;
