import { Body, Param, Post, Put, Req } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { IOrder, OrderModel } from './dto/order.interface';
import { OrdersService } from './orders.service';

@Controller('/api/v1/orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService){}

    @Get('/')
    getallorders(){
        return this.ordersService.getAllOrdersFromDB()
    }

    @Post('/')
    createPost(@Body() newOrder:IOrder){

        return this.ordersService.createNewOrder(newOrder)
    
    }

    @Get('/:orderId')
    getOrderById(@Param('orderId') orderId: String){
        return this.ordersService.findByOrderId(orderId)
    }

    @Delete('/:orderId')
    deleteOrder(@Param('orderId') orderId: string){
        return this.ordersService.deleteOrderREST(orderId)
    }

    @Get('/customer/:customerId')
    getOrderByCustomerId(@Param('customerId') customerId: string){
        return this.ordersService.findOrdersByCustomerId(customerId)
    }

    @Get('/shipped')
    getAllShippedOrders(){
        return this.ordersService.findShippedOrders()
    }

    @Put("/:id")
    async updateById(@Param("id") id: String,@Body() updateOrder: OrderModel){
        return this.ordersService.updateOrder(id,updateOrder)
    }

}
