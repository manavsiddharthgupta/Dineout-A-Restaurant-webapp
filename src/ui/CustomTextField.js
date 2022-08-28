const CustomTextField = (props) => {
  return (
    <input
      className={`border-[1px] border-gray-400 hover:border-gray-500 rounded-sm px-4 outline-green-800  placeholder:font-light placeholder:text-sm placeholder:text-gray-500 py-2 text-sm font-light ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
    />
  );
};
export default CustomTextField;
