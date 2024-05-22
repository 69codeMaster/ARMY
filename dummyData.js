import { ORDER_STATUS } from "./src/constants";
const materials = [
  {
    id: "1",
    description: "עט",
    amountInStock: 10,
    price: "5",
  },
  {
    id: "2",
    description: "תפוח",
    amountInStock: 20,
    price: "5",
  },
  {
    id: "3",
    description: "בקבוק",
    amountInStock: 30,
    price: "5",
  },
  {
    id: "4",
    description: "ערכה",
    amountInStock: 40,
    price: "5",
  },
];

const orders = [
  {
    order_number: "1",
    status: ORDER_STATUS.Created,
    items: [
      {
        item_number: "1",
        materials: "3",
        quantity: "10",
      },
      {
        item_number: "2",
        materials: "2",
        quantity: "3",
      },
    ],

    order_number: "2",
    status: ORDER_STATUS.Issued,
    items: [
      {
        item_number: "1",
        materials: "3",
        quantity: "13",
      },
      {
        item_number: "2",
        materials: "3",
        quantity: "4",
      },
    ],
  },
];
export const fetchMaterial = (materialId) => {
  return materials.find((material) => material.id === materialId);
};

export const setMaterialAmountInStock = (materialId, amount) => {
  let material = materials.find((material) => material.id === materialId);
  material.amountInStock = amount;
};

export const createOrder = (order) => {
  order = { order_number: orders.length + 1, ...order };
  orders.push(order);
};
