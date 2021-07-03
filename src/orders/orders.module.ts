import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { orderProvider } from 'src/database/order.provider';
import { OrdersController } from './orders.controller';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrdersResolver,
    ...orderProvider
  ]
})
export class OrdersModule {}
