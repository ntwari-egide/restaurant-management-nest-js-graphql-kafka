const mongoose = require("mongoose");

export const OrderSchema = mongoose.schema({

    orderId: String,

    orderDate: Date,

    customerId: String,

    status: String,

    menuName: String,

    description: String,

    price: Number,

    shipmentStatus: String,

    orderQuantity: Number,

    totalPrice: Number
    
})