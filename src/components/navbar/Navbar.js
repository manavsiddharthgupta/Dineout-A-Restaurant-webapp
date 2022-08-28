import React, { useContext } from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import NavCon from "./NavCon";
import { CartContext } from "../cart/CartContext";

const Navbar = (props) => {
  const cntx = useContext(CartContext);

  return (
    <nav className="w-full h-16 flex justify-between lg:px-[10%] px-4 border fixed top-[0%] bg-white z-10">
      <div className="my-auto h-full flex items-center">
        <Logo className="h-10 mr-2" />
        <h2 className="text-3xl mt-1 font-semibold tracking-wide font-sea">
          Dineout
        </h2>
      </div>
      <div className="flex">
        <NavCon
          scrollableft={props.setScrollableft}
          className="my-auto gap-8 mr-8 hidden lg:flex"
        />
        <Button
          onClick={() => {
            console.log(cntx.cart.allItemData);
            props.onSetVisb(true);
          }}
          className="h-fit px-4 py-3 my-auto text-xs "
        >
          <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
          Cart
          <span className="ml-2 font-medium px-[0.4rem] rounded-xl bg-white text-[#069C54]">
            {cntx.cart.totalItem}
          </span>
        </Button>
        <div
          onClick={() => {
            props.onSetNav();
          }}
          className="ml-8 my-auto lg:hidden cursor-pointer "
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
