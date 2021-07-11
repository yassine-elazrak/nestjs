
import { Field, InputType } from "@nestjs/graphql";
import {  IsNotEmpty } from "class-validator";

@InputType()
export class CreatePlaylistInput {
    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    owner: string;

}