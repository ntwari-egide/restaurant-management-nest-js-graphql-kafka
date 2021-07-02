import { Injectable, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { KafkaRequest } from 'src/global-dto/kafka-request';
import { DeleteOrderInputs } from './model/dto/inputs/delete-order.input';
import { Order } from './model/order';

@Injectable()
export class OrdersService {

        constructor(private kafkaRequestBody: KafkaRequest){}

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

    async createNewOrder(order: Order): Promise<Order> {



        this.kafkaRequestBody.action = "create-order"
        this.kafkaRequestBody.body = order

        this.client.send('add.new.order',this.kafkaRequestBody)

        return order
    }

    async getAllOrders(){
        return this.client.send('get.orders.list','')
    }

    async deleteOrder(deleteOrder: DeleteOrderInputs): Promise<Order>{
        return
    }

}
