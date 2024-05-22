class Material {
  material_id;
  material_description;

  constructor(material_id, material_description, amount_in_stock) {
    this.material_id = material_id;
    this.material_description = material_description;
  }
}

export default Material;
