import { Inject, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { OrderNotFoundException } from 'src/exceptions/orders.exception';
import { DeleteOrderInputs } from './dto/inputs/delete-order.input';
import { UpdateOrderInput } from './dto/inputs/update-order.input';
import { OrderModel } from './dto/order.interface';
import { Order } from './model/order';

@Injectable()
export class OrdersService {

    constructor(@Inject("ORDER") private readonly orderModel: Model<OrderModel>){}

    // @Client({
    //     transport: Transport.KAFKA,
    //     options: {
    //         client: {
    //             clientId: 'orders',
    //             brokers: ['localhost:9092'],
    //         },
    //         consumer: {
    //             groupId: 'orders-consumer'
    //         }
    //     }
    // })
    // client: ClientKafka

    // async onModuleInit() {
    //     this.client.subscribeToResponseOf('add.new.order');
    //     this.client.subscribeToResponseOf('get.orders.list');

    //     await this.client.connect();
    // }


    async getAllOrdersFromDB(): Promise<OrderModel[]>{

        return this.orderModel.find().exec()

    }

    async findByOrderId(id: String) : Promise<OrderModel> {
        let order : any

        try {
            order  = this.orderModel.findById(id).exec()
        } catch (error) {
            throw new NotFoundException("Order not found with id: "+id)
            
        }

        return order
    }


    checkOrderExistance(orderId: String){
        let order : any

        order = this.orderModel.findById(orderId).exec()

        if(!order){

            throw new OrderNotFoundException("Order not found with id: "+orderId);

        }
    }

    async updateOrder(id: String,orderUpdated: OrderModel){
        this.checkOrderExistance(id)

        return this.orderModel.findByIdAndUpdate(id,orderUpdated).exec()
    }

    async deleteById(id: String){

        this.checkOrderExistance(id)

        return this.orderModel.findByIdAndRemove(id).exec()
    }


    async findShippedOrders(): Promise<OrderModel[]>{
        let orders : any

        try {
            orders = this.orderModel.find({shipmentStatus: "SHIPPED"}).exec()
        } catch (error) {
            throw new OrderNotFoundException("no order shipped found")
        }

        return orders
    }

    async findOrdersByCustomerId(customerId: string): Promise<OrderModel[]>{
        let orders : any

        try {
            orders = this.orderModel.find({customerId: customerId}).exec()
        } catch (error) {
            throw new OrderNotFoundException(`No order found for customer ${customerId}`)
        }

        return orders
    }


    async deleteOrderREST(orderId: string){

        this.checkOrderExistance(orderId)

        this.orderModel.findByIdAndRemove(orderId)

    }

    async createNewOrder(order: Order): Promise<Order> {

        // this.kafkaRequestBody.action = "create-order"
        // this.kafkaRequestBody.body = order

        // this.client.send('add.new.order',this.kafkaRequestBody)

        const newOrder = new this.orderModel(order)

        newOrder.save()

        return newOrder
    }

    async getAllOrders(){
        return this.orderModel.find().exec()
    }

    async deleteOrderGql(deleteOrder: DeleteOrderInputs): Promise<Order>{
        return this.orderModel.findByIdAndRemove(deleteOrder.orderId)
    }

    async updateOrderGql(updateOrder: UpdateOrderInput): Promise<Order>{
        return this.orderModel.findByIdAndUpdate(updateOrder).exec()
    }

}
