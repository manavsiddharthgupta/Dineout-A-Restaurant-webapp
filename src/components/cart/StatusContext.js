import React, { useState, useEffect } from "react";
import StatusData from "./StatusData";
export const StatusContext = React.createContext({});

export const StatusCntxProvider = (props) => {
  const [status, setStatusData] = useState(StatusData);
  const [orderIdfield, setorderIdfield] = useState("");

  useEffect(() => {
    const clean = setTimeout(() => {
      console.log(orderIdfield);
      const filteredData = StatusData.filter((each) =>
        each.orderID.includes(orderIdfield.trim())
      );
      setStatusData(filteredData);
    }, 300);
    return () => {
      clearTimeout(clean);
    };
  }, [orderIdfield]);

  const onSetorderid = (val) => {
    setorderIdfield(val);
  };

  return (
    <StatusContext.Provider value={{ status, orderIdfield, onSetorderid }}>
      {props.children}
    </StatusContext.Provider>
  );
};
