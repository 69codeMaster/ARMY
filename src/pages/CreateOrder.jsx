import { useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import OrderItems from "../components/OrderItems";
import { getNewOrderNumber } from "../api/orders";
import OrderTableHeader from "../components/OrderTableHeader";
import { createOrder } from "../api/orders";
import {
  orderContainsNoLines,
  getItemsWithWrongMaterial,
  getItemsWithNotEnoughStock,
} from "../utils/validateOrder";
import {
  NoRows,
  BadMaterial,
  NotEnoughInStock,
  OrderCreated,
} from "../components/Alerts/alerts";

const CreateOrder = () => {
  const [orderItems, setOrderItems] = useState([]);

  const handleSave = () => {
    if (orderContainsNoLines(orderItems)) {
      NoRows.fire();
      return;
    }

    const itemsWithWrongMaterials = getItemsWithWrongMaterial(orderItems);
    if (itemsWithWrongMaterials.length) {
      const badItemNumbers = itemsWithWrongMaterials
        .map((item) => item.item_number)
        .join(",");

      BadMaterial(badItemNumbers).fire();
      return;
    }

    const itemsWithNotEnoughStock = getItemsWithNotEnoughStock(orderItems);
    if (itemsWithNotEnoughStock.length) {
      const badItemNumbers = itemsWithNotEnoughStock
        .map((item) => item.item_number)
        .join(",");

      NotEnoughInStock(badItemNumbers).fire();
      return;
    }

    createOrder(orderItems);
    setOrderItems([]);
    OrderCreated.fire();
  };

  return (
    <Card>
      <h1 className="text-gray-300 text-4xl text-center font-semibold p-4">
        {"יצירת הזמנה מספר"}
        <span className="text-blue-600 text-center">
          {" "}
          {getNewOrderNumber()}
        </span>
      </h1>

      <div className="overflow-x-auto text-black max-h-[70%]">
        <table className="table">
          <OrderTableHeader />
          <OrderItems
            orderItems={orderItems}
            setOrderItems={setOrderItems}
            isCreate={true}
          />
        </table>

        <div
          className="text-2xl text-right cursor-pointer"
          onClick={() =>
            setOrderItems((prev) => [
              ...prev,
              {
                item_number: orderItems.length + 1,
                material: "",
                quantity: "",
                price: 0,
              },
            ])
          }>
          +
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Button onClick={handleSave}> {"שמור"} </Button>
      </div>
    </Card>
  );
};

export default CreateOrder;
