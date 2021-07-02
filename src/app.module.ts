import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
