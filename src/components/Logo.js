import dineOutLogo from "../images/dineout_icon.png";

const Logo = (props) => {
  return <img className={props.className} src={dineOutLogo} alt="icon" />;
};

export default Logo;
