import { Injectable } from '@nestjs/common';
import { Playlist } from './models/playlist';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { v4 as uuid4 } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';
import { Playlist as PlaylistModule } from '@prisma/client';

export class PlaylistService {
  
  constructor(private readonly prisma: PrismaService) {}

  async createPlaylist(createPlaylistInput: CreatePlaylistInput) {
    const playlist: Playlist = { playlistId: uuid4(), ...createPlaylistInput };
    return this.prisma.Playlist.create(playlist);
  }

  async getPlaylist(getPlaylistArgs: GetPlaylistArgs) {
    return this.prisma.playlist.findunique({
      PlaylistId:getPlaylistArgs.playlistId
    })
  }
}
