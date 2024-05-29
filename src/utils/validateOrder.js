import { materialExists, getMaterialStock } from "../api/material";

export const orderContainsNoLines = (orderItems) => {
  return orderItems.length === 0;
};

export const getItemsWithWrongMaterial = (orderItems) => {
  const itemWithWrongMaterial = orderItems.filter(
    (item) => !materialExists(item.material)
  );

  return itemWithWrongMaterial;
};

export const getItemsWithNotEnoughStock = (orderItems) => {
  const itemsWithNotEnoughStock = orderItems.filter(
    (item) => Number(getMaterialStock(item.material)) < item.quantity
  );

  return itemsWithNotEnoughStock;
};
