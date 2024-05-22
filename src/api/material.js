import { materials } from "../../dummyData";

export const fetchMaterial = (materialId) => {
  return materials.find((material) => material.id === materialId);
};

export const materialExists = (materialId) => {
  return materials.some((material) => material.id == materialId);
};

export const setMaterialAmountInStock = (materialId, amount) => {
  let material = materials.find((material) => material.id === materialId);
  material.amountInStock = amount;
};

export const getMaterialPrice = (materialId) =>
  materials.find((material) => material.id === materialId)?.price;

export const getMaterialStock = (materialId) =>
  materials.find((material) => material.id === materialId)?.amountInStock;
