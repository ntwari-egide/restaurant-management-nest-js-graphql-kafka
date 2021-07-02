import { Injectable, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Order } from './model/order';

@Injectable()
export class OrdersService {
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

        this.client.send('add.new.order',order)

        return order
    }

}
