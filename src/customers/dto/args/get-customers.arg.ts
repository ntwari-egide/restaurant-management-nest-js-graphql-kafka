import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, isNotEmpty } from "class-validator";

@ArgsType()
export class GetCustomersArg {
    @Field(() => [String])
    @IsArray()
    customersIds: String[];
}