import { Injectable } from '@nestjs/common';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { PrismaService } from '../prisma/prisma.service';
import { Playlist, Prisma } from '@prisma/client';

@Injectable()
export class PlaylistService {
  
  constructor(private readonly prisma: PrismaService) {}

  async createPlaylist(createPlaylistInput: Prisma.PlaylistCreateInput) {
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
