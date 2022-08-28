import React, { useReducer } from "react";

export const CartContext = React.createContext({});

const initialState = {
  allItemData: [],
  totalItem: 0,
  amount: 0,
};

const reducerFunc = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existItem = state.allItemData.findIndex(
      (item) => item.id === action.payload.id
    );
    const foodExist = state.allItemData[existItem];
    const newCart = [...state.allItemData];
    if (foodExist) {
      const totalQty = +foodExist.person + +action.payload.person;
      const renewedItem = {
        ...foodExist,
        person: totalQty,
      };
      newCart[existItem] = renewedItem;
    } else {
      newCart.push(action.payload);
    }
    const newTotalCart = state.totalItem + +action.payload.person;
    const totalAmount =
      state.amount + action.payload.price * +action.payload.person;

    return {
      allItemData: newCart,
      totalItem: newTotalCart,
      amount: totalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existItem = state.allItemData.findIndex(
      (item) => item.id === action.payload
    );

    const foodExist = state.allItemData[existItem];
    let newCart = [...state.allItemData];
    if (foodExist.person > 1) {
      const totalQty = +foodExist.person - 1;
      const renewedItem = {
        ...foodExist,
        person: totalQty,
      };
      newCart[existItem] = renewedItem;
    } else {
      const ren = state.allItemData.filter(
        (each) => each.id !== action.payload
      );
      newCart = ren;
    }

    let newTotalCart = state.totalItem - 1;
    let totalAmount = state.amount - foodExist.price;
    if (newTotalCart === 0) {
      totalAmount = 0;
    }

    return {
      allItemData: newCart,
      totalItem: newTotalCart,
      amount: totalAmount,
    };
  } else {
    return {
      initialState,
    };
  }
};

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(reducerFunc, initialState);

  const addFood = (foodItem) => {
    dispatch({ type: "ADD_ITEM", payload: foodItem });
  };

  const removeFood = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <CartContext.Provider value={{ cart, addFood, removeFood }}>
      {props.children}
    </CartContext.Provider>
  );
};
