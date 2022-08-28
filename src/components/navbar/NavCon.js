import Navitem from "./Navitem";

const NavCon = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <ul className={`${props.className}`}>
      <Navitem
        onClick={() => {
          scrollToSection(props.scrollableft.home);
        }}
      >
        Home
      </Navitem>
      <Navitem
        onClick={() => {
          scrollToSection(props.scrollableft.about);
        }}
      >
        About
      </Navitem>
      <Navitem
        onClick={() => {
          scrollToSection(props.scrollableft.services);
        }}
      >
        Services
      </Navitem>
      <Navitem
        onClick={() => {
          scrollToSection(props.scrollableft.menu);
        }}
      >
        Menu
      </Navitem>
      <Navitem
        onClick={() => {
          scrollToSection(props.scrollableft.bookTable);
        }}
      >
        Book Table
      </Navitem>
    </ul>
  );
};

export default NavCon;
