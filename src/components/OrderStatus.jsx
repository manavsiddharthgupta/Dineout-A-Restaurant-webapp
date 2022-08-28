import { useContext } from "react";
import SubTitle from "../ui/CustomSubTitle";
import Title from "../ui/CustomTitle";
import { TextField } from "@mui/material";
import { StatusContext } from "./cart/StatusContext";

const OrderStatus = () => {
  const cntx = useContext(StatusContext);
  return (
    <section className="mt-28 py-8 px-5 sm:px-[5%] lg:px-[15%]">
      <Title className="text-center">Order Status</Title>
      <SubTitle className="text-center mb-4">Track your Food Order</SubTitle>
      <TextField
        id="outlined-basic"
        label="Your Order ID"
        variant="outlined"
        className="w-full z-0"
        value={cntx.orderIdfield}
        onChange={(e) => {
          cntx.onSetorderid(e.target.value);
        }}
      />
      <div className=" h-[322px] overflow-y- scrollbar-thumb-gray-300 scrollbar-thin mt-8">
        <table className="w-full">
          <thead>
            <tr className="border-black border-[1px] h-8">
              <th className="w-[30%]">Expected Delivery</th>
              <th className="border-black border-[1px]">Order ID</th>
              <th className="w-[30%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {cntx.status.map((each) => {
              return (
                <tr
                  key={each.orderID}
                  className="border-black border-[1px] h-8 text-xs"
                >
                  <td className="w-[25%] text-center">{each.expectedTime}</td>
                  <td className="border-black border-[1px] text-center">
                    {each.orderID}
                  </td>
                  <td className="w-[25%] text-center">
                    <span
                      className={`rounded-xl px-2 py-1 text-white font-light ${each.bckColor}`}
                    >
                      {each.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default OrderStatus;
