import Navitem from "./Navitem";

const NavCon = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const allNavItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "service" },
    { name: "Menu", id: "menu" },
    { name: "Book Table", id: "bookTable" },
  ];

  return (
    <ul className={`${props.className}`}>
      {allNavItems.map((each) => {
        return (
          <Navitem
            key={each.id}
            onClick={() => {
              scrollToSection(props.scrollableft[each.id]);
            }}
          >
            {each.name}
          </Navitem>
        );
      })}
    </ul>
  );
};

export default NavCon;
