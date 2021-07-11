import { Injectable } from '@nestjs/common';
import { Playlist } from './models/playlist';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { v4 as uuid4 } from 'uuid';

export class PlaylistService {
  private playlists: Playlist[] = [];

  public createPlaylist(createPlaylistInput: CreatePlaylistInput) {
    // const playlist: Playlist = { playlistId: uuid4(), ...createPlaylistInput };
    // this.playlists.push(playlist);
    // return playlist;
    return "helloyassine"
  }

  public getPlaylist(getPlaylistArgs: GetPlaylistArgs) {
    // return this.playlists.find(
    //   (item) => item.playlistId === getPlaylistArgs.playlistId,
    // );
    return "hello"
  }
}
