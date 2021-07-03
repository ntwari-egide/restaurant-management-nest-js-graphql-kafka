import { Field, InputType } from "@nestjs/graphql";

import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteOrderInputs{
    @Field()
    @IsNotEmpty()
    id: String
}