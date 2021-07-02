import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateOrderInput } from "./model/dto/inputs/create-order.input";
import { DeleteOrderInputs } from "./model/dto/inputs/delete-order.input";
import { Order } from './model/order';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {

    constructor(private readonly ordersService: OrdersService){}

    @Query(()=> [Order] , { name: 'allOrders', nullable: 'items'})
    getAllOrders(){
        return this.ordersService.getAllOrders
    }

    @Mutation(() => Order)
    async createUser(@Args('createOrderData') createOrderData : CreateOrderInput): Promise<Order>{
        return this.ordersService.createNewOrder(createOrderData)
    }

    @Mutation(()=> Order)
    async deleteUser(@Args('deleteOrderData') deleteOrderData: DeleteOrderInputs): Promise<Order>{
        return this.ordersService.deleteOrder(deleteOrderData)
    }
}
