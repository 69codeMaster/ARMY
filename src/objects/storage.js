class Storage {
  storage_id;
  stock; // <key = material, value = stock>

  constructor(storage_id) {
    this.storage_id = storage_id;
    this.stock = new Map();
  }

  addToStock(material_id, amount) {
    stock.set(stock.get(material_id) + amount);
  }

  removeStock(material_id, amount) {
    stock.set(stock.get(material_id) - amount);
  }
}
