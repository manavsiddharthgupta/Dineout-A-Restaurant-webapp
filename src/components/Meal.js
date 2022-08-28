import React, { useState, useContext } from "react";
import Button from "./Button";
import { CartContext } from "./cart/CartContext";

const Meal = (props) => {
  const [qty, setqty] = useState(1);
  const cntx = useContext(CartContext);
  return (
    <div className="rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] hover:shadow-[0px_7px_29px_0_rgba(100,100,111,0.2)] w-[250px] p-4">
      <img
        className="w-full h-[130px] rounded-xl mb-2"
        src={props.eachMeal.image}
        alt="chck"
      />
      <h1 className="text-sm font-medium">{props.eachMeal.name}</h1>
      <p className="text-xs font-light my-1">{props.eachMeal.description}</p>
      <div className="flex justify-between">
        <h2 className="text-sm font-medium">Price :</h2>
        <h2 className="text-sm font-medium text-[#048654]">
          $ {props.eachMeal.price}
        </h2>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-sm font-medium">Person :</p>
        <input
          className="w-10 pl-1 rounded-sm outline-none text-xs"
          type="number"
          value={qty}
          onChange={(e) => {
            setqty(e.target.value);
          }}
          min="1"
          max="6"
        />
      </div>
      <Button
        onClick={() => {
          const data = {
            name: props.eachMeal.name,
            id: props.eachMeal.id,
            person: +qty,
            price: props.eachMeal.price,
          };
          cntx.addFood(data);
        }}
        className="text-sm w-full py-1 mt-1"
      >
        Add to cart
      </Button>
    </div>
  );
};
export default Meal;
