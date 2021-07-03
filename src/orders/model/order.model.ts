const mongoose = require("mongoose");
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order{
    @Prop()
    orderId: string

    @Prop()
    orderDate: Date
    
    @Prop()
    customerId: string
    
    @Prop()
    status: string
    
    @Prop()
    menuName: string
    
    @Prop()
    description: string
    
    @Prop()
    price: Number
    
    @Prop()
    shipmentStatus: string
    
    @Prop()
    orderQuantity: number
    
    @Prop()
    totalPrice: number


}
export const OrderSchema = SchemaFactory.createForClass(Order);