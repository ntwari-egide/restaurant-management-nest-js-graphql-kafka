import { Document } from "mongoose";

export interface IOrder{

    orderId: string

    orderDate: Date

    customerId: string

    status: string

    menuName: string

    description: string

    price: Number

    shipmentStatus: string

    orderQuantity: number

    totalPrice: number


}

export interface OrderModel extends Document{

    orderId: string

    orderDate: Date

    customerId: string

    status: string

    menuName: string

    description: string

    price: Number

    shipmentStatus: string

    orderQuantity: number

    totalPrice: number


}