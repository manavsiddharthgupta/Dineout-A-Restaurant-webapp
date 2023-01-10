import React, { useState } from "react";
import SubTitle from "../ui/CustomSubTitle";
import Title from "../ui/CustomTitle";
import MenuBtn from "../ui/MenuBtn";
import Meal from "./Meal";
import { dummyMeal } from "../stores/meal";

const Menu = (props) => {
  const [allItem, setallItem] = useState(dummyMeal.appetizer);
  const [category, setCategory] = useState("appetizer");
  const allCategory = Object.keys(dummyMeal);

  const allLinks = allCategory.map((each) => {
    const menuName = each[0].toUpperCase() + each.slice(1);
    return (
      <MenuBtn
        key={each}
        onClick={() => {
          setallItem(dummyMeal[each]);
          setCategory(each);
        }}
        className={`px-6 py-2 ${
          category === each
            ? "bg-[#048654] text-white"
            : "bg-white text-[#069C54]"
        }`}
      >
        {menuName}
      </MenuBtn>
    );
  });
  return (
    <section
      ref={props.scr.menu}
      className="mt-28 px-5 sm:px-[5%] lg:px-[15%] py-4"
    >
      <Title className="text-center">Menu</Title>
      <SubTitle className="text-center">Indian Cuisine</SubTitle>
      <div className="flex gap-4 flex-wrap justify-center mt-8">{allLinks}</div>
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-around my-8 max-h-[700px] overflow-y-auto py-4 scrollbar-thumb-gray-300 scrollbar-thin">
        {allItem.map((meal) => {
          return <Meal key={meal.id} eachMeal={meal} />;
        })}
      </div>
    </section>
  );
};
export default Menu;
