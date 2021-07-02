import { ArgsType, Field } from "@nestjs/graphql";
import { IsArray} from "class-validator";

@ArgsType()
export class GetOrdersArgs {
    @Field(() => [String])
    @IsArray()
    orderIds: String[];
}