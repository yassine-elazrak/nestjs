import {Args, ArgsType , Field} from "@nestjs/graphql";
import { isNotEmpty, IsNotEmpty  } from "class-validator";

@ArgsType()
export class GetPlaylistArgs{
    @Field()
    @IsNotEmpty()
    playlistId:string;
}


