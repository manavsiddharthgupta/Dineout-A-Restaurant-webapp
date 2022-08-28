const Title = (props) => {
  return (
    <h3 className={`text-[#069C54] font-medium ${props.className}`}>
      {props.children}
    </h3>
  );
};
export default Title;
