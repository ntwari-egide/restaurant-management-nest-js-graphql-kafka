import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';

@Module({
  providers: [OrdersResolver]
})
export class OrdersModule {}
