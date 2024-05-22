import OrderItem from "./orderItem";
class Order {
  order_items;
  order_id;
  /**
   * @param {OrderItem[]} order_items
   */
  constructor(order_items) {
    this.order_items = order_items;
  }
}
