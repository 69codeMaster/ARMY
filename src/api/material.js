import { materials } from "../../dummyData";
import { updateLocalStorage } from "../utils/localStorage";
import { LOCAL_STORAGE } from "../constants";

export const fetchMaterial = (materialId) => {
  return materials.find((material) => material.id === materialId);
};

export const materialExists = (materialId) => {
  return materials.some((material) => material.id == materialId);
};

export const setMaterialAmountInStock = (materialId, amount) => {
  let material = materials.find((material) => material.id === materialId);
  material.amountInStock = amount;
  updateLocalStorage(LOCAL_STORAGE.Materials, JSON.stringify(materials));
};

export const getMaterialPrice = (materialId) =>
  materials.find((material) => material.id === materialId)?.price;

export const getMaterialStock = (materialId) =>
  materials.find((material) => material.id === materialId)?.amountInStock;

export const reclaimStockFromCanceledOrder = (materialAmount) => {
  materialAmount.forEach(({ material, amount }) =>
    setMaterialAmountInStock(
      material,
      Number(amount) + Number(getMaterialStock(material))
    )
  );
};
