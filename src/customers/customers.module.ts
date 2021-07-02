import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Module({
  providers: [CustomersService]
})
export class CustomersModule {}
