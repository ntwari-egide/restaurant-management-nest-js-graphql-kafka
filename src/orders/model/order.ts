import { IsOptional } from "class-validator"


export class Order{

    orderId: string

    orderDate: Date

    customerId: string

    status: string

    menuName: string

    description: string

    price: Number

    shipmentStatus: string

}