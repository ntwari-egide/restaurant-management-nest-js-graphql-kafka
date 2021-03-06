import { Field, ObjectType } from "@nestjs/graphql"
import { IsOptional } from "class-validator"


@ObjectType()
export class Order{

    @Field()
    orderId: string

    @Field()
    orderDate: Date

    @Field()
    customerId: string

    @Field()
    status: string

    @Field()
    menuName: string

    @Field()
    description: string

    @Field()
    price: Number

    @Field()
    shipmentStatus: string

    @Field()
    orderQuantity: number

    @Field()
    totalPrice: number

}