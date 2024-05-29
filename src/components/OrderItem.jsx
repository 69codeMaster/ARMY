import { getMaterialPrice } from "../api/material";
import Cell from "./UI/Table/Cell";

const OrderItem = ({ orderItem, setOrderItems, isCreate, key }) => {
  const price = getMaterialPrice(orderItem.material) * orderItem.quantity;
  const handleChange = (field, value) => {
    setOrderItems((prev) => {
      const otherItems = prev.filter(
        (item) => item.item_number !== orderItem.item_number
      );
      return [...otherItems, { ...orderItem, [field]: value }].sort(
        (item) => item.item_number
      );
    });
  };

  return (
    <tr key={key}>
      <Cell value={isNaN(price) ? 0 : price} name={"price"} />
      <Cell
        editable={isCreate}
        value={orderItem.quantity}
        name={"quantity"}
        onChange={handleChange}
      />
      <Cell
        editable={isCreate}
        value={orderItem.material}
        name={"material"}
        onChange={handleChange}
      />
      <Cell value={orderItem.item_number} name={"item"} />
    </tr>
  );
};

export default OrderItem;
