import { ORDER_STATUS } from "./src/constants";
import { LOCAL_STORAGE } from "./src/constants";
import { readFromLocalStorage } from "./src/utils/localStorage";

export const materials = readFromLocalStorage(LOCAL_STORAGE.Materials, [
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
]);

export const orders = readFromLocalStorage(LOCAL_STORAGE.Orders, [
  {
    order_number: "1",
    status: ORDER_STATUS.Created,
    items: [
      {
        item_number: "1",
        material: "3",
        quantity: "10",
      },
      {
        item_number: "2",
        material: "2",
        quantity: "3",
      },
    ],
  },
  {
    order_number: "2",
    status: ORDER_STATUS.Issued,
    items: [
      {
        item_number: "1",
        material: "3",
        quantity: "13",
      },
      {
        item_number: "2",
        material: "3",
        quantity: "4",
      },
    ],
  },
]);
  