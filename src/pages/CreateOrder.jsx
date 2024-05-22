import { useState } from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import OrderItemsContainer from "../components/OrderItems";
import OrderHeader from "../components/OrderHeader";
import { getNewOrderNumber } from "../api/orders";
import { createOrder } from "../api/orders";
import {
  orderContainsNoLines,
  getItemsWithWrongMaterial,
  getItemsWithNotEnoughStock,
} from "../utils/validateOrder";

const CreateOrder = () => {
  const [orderItems, setOrderItems] = useState([]);

  const handleSave = () => {
    if (orderContainsNoLines(orderItems)) {
      alert(`לא ניתן להקים הזמנה ללא שורות`);
      return;
    }

    const itemsWithWrongMaterials = getItemsWithWrongMaterial(orderItems);
    if (itemsWithWrongMaterials.length) {
      const badItemNumbers = itemsWithWrongMaterials
        .map((item) => item.item_number)
        .join(",");

      alert(`שורות ${badItemNumbers} מכילות חומרים לא קיימים`);
      return;
    }

    const itemsWithNotEnoughStock = getItemsWithNotEnoughStock(orderItems);
    if (itemsWithNotEnoughStock.length) {
      const badItemNumbers = itemsWithNotEnoughStock
        .map((item) => item.item_number)
        .join(",");

      alert(`אין כמות מספיקה במלאי עבור שורות ${badItemNumbers}`);
      return;
    }

    createOrder(orderItems);
    setOrderItems([]);
    alert(`ההזמנה נוצרה בהצלחה`);
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

      <div className="overflow-x-auto text-black">
        <table className="table">
          <OrderHeader />
          <OrderItemsContainer
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
      <div className="flex justify-center items-center" onClick={handleSave}>
        <Button> {"שמור"} </Button>
      </div>
    </Card>
  );
};

export default CreateOrder;
