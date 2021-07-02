import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOrderInput{
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