import mongoose from "mongoose";
const { Schema } = mongoose;

const transactionSchema = new Schema({
    user_id: Number,
    items: [{
        item_id: Number,
        quantity: Number
    }],
    date: Date,
    payment_method: String,
    status: String,
    remarks: String,
});
const Transaction = new mongoose.model("transactions", transactionSchema);
export default Transaction;