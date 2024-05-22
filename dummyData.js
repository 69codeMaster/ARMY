const materials = [
  {
    id: "1",
    description: "עט",
    amountInStock: 10,
  },
  {
    id: "2",
    description: "תפוח",
    amountInStock: 20,
  },
  {
    id: "3",
    description: "בקבוק",
    amountInStock: 30,
  },
  {
    id: "4",
    description: "ערכה",
    amountInStock: 40,
  },
];

export const fetchMaterial = (materialId) => {
  return materials.find((material) => material.id === materialId);
};

export const setMaterialAmountInStock = (materialId, amount) => {
  let material = materials.find((material) => material.id === materialId);
  material.amountInStock = amount;
};
