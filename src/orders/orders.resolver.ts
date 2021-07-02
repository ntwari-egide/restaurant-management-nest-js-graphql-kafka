import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateOrderInput } from "./model/dto/inputs/create-order.input";
import { DeleteOrderInputs } from "./model/dto/inputs/delete-order.input";
import { UpdateOrderInput } from "./model/dto/inputs/update-order.input";
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
    async createOrder(@Args('createOrderData') createOrderData : CreateOrderInput): Promise<Order>{
        return this.ordersService.createNewOrder(createOrderData)
    }

    @Mutation(() => Order)
    async updateOrder(@Args('updateOrderData') updateOrderData : UpdateOrderInput): Promise<Order>{
        return this.ordersService.updateOrder(updateOrderData)
    }

    @Mutation(()=> Order)
    async deleteOrder(@Args('deleteOrderData') deleteOrderData: DeleteOrderInputs): Promise<Order>{
        return this.ordersService.deleteOrder(deleteOrderData)
    }
}
