import { Injectable } from '@nestjs/common';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { PrismaService } from '../prisma/prisma.service';
import { Playlist, Prisma } from '@prisma/client';

@Injectable()
export class PlaylistService {
  
  constructor(private readonly prisma: PrismaService) {}

  async createPlaylist(createPlaylistInput: Prisma.PlaylistCreateInput) {
    const { name , owner} = createPlaylistInput
    console.log({haw : this.prisma})
    return this.prisma.playlist.create({
      data : {
        ...createPlaylistInput
      }
    });
  }

  async getPlaylist(getPlaylistArgs: GetPlaylistArgs) {
    return this.prisma.playlist.findFirst()
  }
}
