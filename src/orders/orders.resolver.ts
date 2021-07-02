import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Order } from './model/order';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {

    constructor(private readonly ordersService: OrdersService){}

    @Query(()=> [Order] , { name: 'allOrders', nullable: 'items'})
    getAllOrders(){
        return this.ordersService.getAllOrders
    }

    @Mutation(()=> Order)
    createUser(@Args('createOrderData') createUserData : CreateUserInputs): User{
        return this.usersService.createUser(createUserData)
    }

}
