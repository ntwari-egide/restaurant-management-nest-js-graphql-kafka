import { Module } from "@nestjs/common";
import { databaseProviders } from "src/providers/database";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
  })
  export class DatabaseModule {}