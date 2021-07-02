import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { CustomersResolver } from './customers.resolver';

@Module({
  providers: [CustomersService, CustomersResolver],
  controllers: [CustomersController]
})
export class CustomersModule {}
