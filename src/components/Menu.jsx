import React, { useState } from "react";
import Image from "../images/Images";
import SubTitle from "../ui/CustomSubTitle";
import Title from "../ui/CustomTitle";
import MenuBtn from "../ui/MenuBtn";
import Meal from "./Meal";
const dummyMeal = {
  appetizer: [
    {
      id: "b1",
      name: "Lamb Samosa",
      image: Image.lambSamosa,
      description:
        "Crispy fried dumpling stuffed with lamb and vegetables with sauce and other spices",
      price: 8.59,
    },
    {
      id: "b2",
      name: "EggPlant Pakora",
      image: Image.eggPakoda,
      description:
        "Eggplant and onions coated in a chickpea batter and fried with sauce and other spices",
      price: 4.99,
    },
    {
      id: "b3",
      name: "Chicken Pokaro",
      image: Image.chickenPakoda,
      description:
        "Chopped chicken and onions coated in a chickpea batter and fried sauce and other spices",
      price: 3.99,
    },
    {
      id: "b5",
      name: "Vegetables Pokaro",
      image: Image.vegetablePakoda,
      description:
        "chopped mixed vegetables coated in a chickpea batter and fried cilantro and a spicy sauce",
      price: 16.99,
    },
    {
      id: "b6",
      name: "Channa Chat",
      image: Image.channaChatt,
      description:
        "Chickpeas mixed with potaoes ,cucumber onions, topped with yogurt, cilantro and spicy sauce",
      price: 13.99,
    },
    {
      id: "b7",
      name: "Samosa Chatt",
      image: Image.samosaChatt,
      description:
        "Two vegetables samosa topped with, cucumber, onions yogurt, cilantro and spicy sauce",
      price: 12.99,
    },
  ],
  breads: [
    {
      id: "s1",
      name: "Poori",
      image: Image.poori,
      description: "Whole Wheat bread fried in vegetables oil",
      price: 2.25,
    },
    {
      id: "s2",
      name: "Naan",
      image: Image.naan,
      description: "Whole wheat bread grilled with butter",
      price: 4.99,
    },
    {
      id: "s3",
      name: "Garlic Naan",
      image: Image.garlicNaan,
      description: "Whole wheat bread grilled with garlic and butter",
      price: 3.99,
    },
    {
      id: "s4",
      name: "Roti",
      image: Image.roti,
      description: "Plain whole wheat bread for two minutes",
      price: 1.99,
    },
    {
      id: "s5",
      name: "Aloo Pratha",
      image: Image.alooParatha,
      description: "Whole wheat bread stuffed with potatoes",
      price: 2.95,
    },
  ],
  tandoori: [
    {
      id: "t1",
      name: "Chicken Tandoori",
      image: Image.chickenTandoori,
      description:
        "Half bonein chicken marinated in spices and cooked atandoori oven",
      price: 11.95,
    },
    {
      id: "t2",
      name: "Quail Tandoori",
      image: Image.quailTandoori,
      description:
        "Whole quail marinated in spices and cooked in tandoor oven with butter",
      price: 17.95,
    },
    {
      id: "t3",
      name: "Lamb Tandoori",
      image: Image.lambTandoori,
      description:
        "Lamb chops marinated in spices and cooked in a tandoor oven",
      price: 14.95,
    },
    {
      id: "t4",
      name: "Tandoori Shrimp",
      image: Image.shrimpTandoori,
      description:
        "Jumbo shrimp marinated and cooked on skewers in tandoor oven",
      price: 13.99,
    },
  ],
  briyani: [
    {
      id: "l1",
      name: "Vegetable Briyani",
      image: Image.vegBriyani,
      description:
        "Vegetable medley, topped with cashews and cliantro, served over basmati rice with some jeera",
      price: 9.25,
    },
    {
      id: "l2",
      name: "Chicken Briyani",
      image: Image.chickenBiyani,
      description:
        "Tender marinated chicken, topped with cashews and cilantro, served over basmati rice",
      price: 10.95,
    },
    {
      id: "l3",
      name: "Lamb Briyani",
      image: Image.lambBriyani,
      description:
        "Roasted lamb and root vegetables, topped with cashewa and cilantro, served basmati rice",
      price: 12.95,
    },
    {
      id: "l4",
      name: "Scallop Briyani",
      image: Image.scallopBriyani,
      description:
        "Seared scallops and shrimp, topped with cashewa and cilantro, served basmati rice",
      price: 18.99,
    },
  ],
};
const Menu = (props) => {
  const [allItem, setallItem] = useState(dummyMeal.appetizer);
  return (
    <section
      ref={props.scr.menu}
      className="mt-28 px-5 sm:px-[5%] lg:px-[15%] py-4"
    >
      <Title className="text-center">Menu</Title>
      <SubTitle className="text-center">Indian Cuisine</SubTitle>
      <div className="flex gap-4 flex-wrap justify-center mt-8">
        <MenuBtn
          onClick={() => {
            setallItem(dummyMeal.appetizer);
          }}
          className={`px-6 py-2 ${
            allItem === dummyMeal.appetizer
              ? "bg-[#048654] text-white"
              : "bg-white text-[#069C54]"
          }`}
        >
          Appetizers
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            setallItem(dummyMeal.tandoori);
          }}
          className={`px-6 py-2 ${
            allItem === dummyMeal.tandoori
              ? "bg-[#048654] text-white"
              : "bg-white text-[#069C54]"
          }`}
        >
          Tandoori
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            setallItem(dummyMeal.breads);
          }}
          className={`px-6 py-2 ${
            allItem === dummyMeal.breads
              ? "bg-[#048654] text-white"
              : "bg-white text-[#069C54]"
          }`}
        >
          Breads
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            setallItem(dummyMeal.briyani);
          }}
          className={`px-6 py-2 ${
            allItem === dummyMeal.briyani
              ? "bg-[#048654] text-white"
              : "bg-white text-[#069C54]"
          }`}
        >
          Briyani
        </MenuBtn>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-around my-8 max-h-[700px] overflow-y-auto py-4 scrollbar-thumb-gray-300 scrollbar-thin">
        {allItem.map((meal) => {
          return <Meal key={meal.id} eachMeal={meal} />;
        })}
      </div>
    </section>
  );
};
export default Menu;
