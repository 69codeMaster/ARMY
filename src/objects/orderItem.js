import { ORDER_STATUS } from "../constants";
class OrderItem {
  material;
  amount;
  price;
  status;

  constructor(material, amount, price) {
    this.material = material;
    this.amount = amount;
    this.price = price;
    this.status = ORDER_STATUS.Created;
  }
}

export default OrderItem;
