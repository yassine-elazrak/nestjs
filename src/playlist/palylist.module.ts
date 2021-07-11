import { Module } from "@nestjs/common";
import { PlaylistService } from "./playlist.service";
import { PlaylistResolver } from "./palylist.resolver";

@Module({
    providers: [PlaylistService, PlaylistResolver]
})
export class PlaylistModule { }