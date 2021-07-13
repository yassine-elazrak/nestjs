import { Module } from "@nestjs/common";
import { PlaylistService } from "./playlist.service";
import { PlaylistResolver } from "./palylist.resolver";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [PlaylistService, PlaylistResolver]
})
export class PlaylistModule { }