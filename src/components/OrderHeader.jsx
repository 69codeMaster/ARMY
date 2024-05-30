import React from "react";
import { FaCheckCircle as CreatedIcon } from "react-icons/fa";
import TruckCancelIcon from "../components/UI/Icons/TruckCancelIcon";
import TruckCheckIcon from "../components/UI/Icons/TruckCheckIcon";
import { ORDER_STATUS } from "../constants";

const statusStyles = {
  [ORDER_STATUS.Created]: {
    color: "text-green-500",

    icon: <CreatedIcon />,
    text: "ההזמנה בססטוס נוצר",
  },
  [ORDER_STATUS.Canceled]: {
    color: "text-red-500",
    icon: <TruckCancelIcon />,
    text: "ההזמנה בוטלה",
  },
  [ORDER_STATUS.Issued]: {
    color: "text-blue-700",
    icon: <TruckCheckIcon />,
    text: "ההזמנה נופקה ",
  },
};

const OrderHeader = ({ orderHeaderData }) => {
  const { color, icon, text } = statusStyles[orderHeaderData?.status] || {};
  return (
    <div className={`flex w-full items-center justify-end ${color} text-lg`}>
      {icon}
      <span className="ml-2 font-bold capitalize">{text}</span>
    </div>
  );
};

export default OrderHeader;
