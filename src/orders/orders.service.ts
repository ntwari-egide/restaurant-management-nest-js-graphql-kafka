import { Inject, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { DeleteOrderInputs } from './dto/inputs/delete-order.input';
import { UpdateOrderInput } from './dto/inputs/update-order.input';
import { IOrder, OrderModel } from './dto/order.interface';
import { Order } from './model/order';

@Injectable()
export class OrdersService {

    constructor(@Inject("ORDER" ) private readonly orderModel: Model<OrderModel>){}

    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'orders',
                brokers: ['localhost:9092'],
            },
            consumer: {
                groupId: 'orders-consumer'
            }
        }
    })
    client: ClientKafka

    async onModuleInit() {
        this.client.subscribeToResponseOf('add.new.order');
        this.client.subscribeToResponseOf('get.orders.list');

        await this.client.connect();
    }


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

    async updateOrder(id: String,orderUpdated: OrderModel){
        return this.orderModel.findByIdAndUpdate(id,orderUpdated).exec()
    }

    async deleteById(id: String){
        return this.orderModel.findByIdAndRemove(id).exec()
    }

    

    async createNewOrder(order: Order): Promise<Order> {



        // this.kafkaRequestBody.action = "create-order"
        // this.kafkaRequestBody.body = order

        // this.client.send('add.new.order',this.kafkaRequestBody)

        return order
    }

    async getAllOrders(){
        return this.client.send('get.orders.list','')
    }

    async deleteOrder(deleteOrder: DeleteOrderInputs): Promise<Order>{
        return
    }

    async updateOrderGql(updateOrder: UpdateOrderInput): Promise<Order>{
        return
    }

}
