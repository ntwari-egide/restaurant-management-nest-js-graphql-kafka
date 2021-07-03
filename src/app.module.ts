import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    OrdersModule, 
    CustomersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
