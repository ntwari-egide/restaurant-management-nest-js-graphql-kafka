import { Body, Post, Req } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { IOrder } from './model/dto/order.interface';
import { OrdersService } from './orders.service';

@Controller('/api/v1/orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService){}

    @Get('/')
    getallorders(){
        return this.ordersService.getAllOrders()
    }

    @Post('/')
    createPost(@Body() newOrder:IOrder){

        return this.ordersService.createNewOrder(newOrder)
    
    }

}
