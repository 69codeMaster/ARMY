import { useState } from "react";
import Card from "../components/UI/Card";
import { getNewOrderNumber } from "../../dummyData";
import OrderItemsContainer from "../components/OrderItemsContainer";
import OrderHeader from "../components/OrderHeader";
import Button from "../components/UI/Button";
import { materialExists, createOrder } from "../../dummyData";

const CreateOrder = () => {
  const [orderItems, setOrderItems] = useState([
    {
      item: 1,
      material: "",
      quantity: "",
      price: 0,
    },
  ]);

  const handleSave = () => {
    const itemWithWrongMaterial = orderItems.filter(
      (item) => !materialExists(item.material)
    );

    if (itemWithWrongMaterial.length) {
      const badItemNumbers = itemWithWrongMaterial
        .map((item) => item.item)
        .join(",");

      alert(`שורות ${badItemNumbers} מכילות חומרים לא קיימים`);
    } else {
      createOrder(orderItems);
      setOrderItems([
        {
          item: 1,
          material: "",
          quantity: "",
          price: 0,
        },
      ]);

      alert(`ההזמנה נוצרה בהצלחה`);
    }
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
          />
        </table>
        <div
          className="text-2xl text-right cursor-pointer"
          onClick={() =>
            setOrderItems((prev) => [
              ...prev,
              {
                item: orderItems.length + 1,
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
