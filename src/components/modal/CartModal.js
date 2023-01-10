import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { CartContext } from "../cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import BackDrop from "./BackDrop";

const CartOverlay = (props) => {
  const cntx = useContext(CartContext);

  let cartData = (
    <div className="max-h-[290px] overflow-y-auto p-4">
      {cntx.cart.allItemData.map((each) => {
        return (
          <div
            key={each.id}
            className="flex justify-between items-center py-5 border-b-[1px] border-black"
          >
            <div className="mr-2">
              <p>{each.name}</p>
              <p className="text-xs font-semibold text-[#069C54]">
                $ {each.price} / Person
              </p>
            </div>
            <div className="flex items-center">
              <Button
                onClick={() => {
                  cntx.removeFood(each.id);
                }}
                className="px-2 rounded-md py-[2px]"
              >
                -
              </Button>
              <p className="mx-2 w-4 text-center">{each.person}</p>
              <Button
                onClick={() => {
                  cntx.addFood({
                    name: each.name,
                    id: each.id,
                    person: 1,
                    price: each.price,
                  });
                }}
                className="px-2 rounded-md py-[2px]"
              >
                +
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (cntx.cart.allItemData < 1) {
    cartData = (
      <div className="text-center">
        <FontAwesomeIcon
          className="text-red-500 my-4"
          icon={faShoppingCart}
          size="3x"
        />
        <p className="font-semibold">Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-[80%] max-h-[450px] fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-40 p-8 rounded-lg">
      {cartData}
      <div className="text-right">
        <div className="my-4 flex justify-between px-4">
          <p className="text-lg font-medium">Total Amount :</p>
          <p className="text-lg font-medium text-[#069C54]">
            $ {cntx.cart.amount.toFixed(2)}
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              props.onSetModal(false);
            }}
            className="px-4 py-2 tracking-wide bg-white text-[#069C54] hover:text-white border-[1px] border-[#069C54]"
          >
            close
          </Button>
          <Button
            onClick={() => {
              console.log("order Placed..");
            }}
            className="px-4 py-2 tracking-wide ml-4"
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop
          onClick={() => {
            props.onSetVisb(false);
          }}
        />,
        document.getElementById("cart-modals")
      )}
      {ReactDOM.createPortal(
        <CartOverlay onSetModal={props.onSetVisb} />,
        document.getElementById("cart-modals")
      )}
    </Fragment>
  );
};
