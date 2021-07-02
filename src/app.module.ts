import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [OrdersModule, CustomersModule],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
