import mongoose from "mongoose";
const { Schema } = mongoose;

const inventorySchema = new Schema({
    item_name: String,
    item_type: Number,
    price: Number,
    supplier_id: Number,
    saleable: Boolean,
    stock_quantity: Number,
    stock_transactions: [Number],
});
const Inventory = new mongoose.model("inventory", inventorySchema);
export default Inventory;