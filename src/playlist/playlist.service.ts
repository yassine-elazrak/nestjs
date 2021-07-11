import { Injectable } from '@nestjs/common';
import { Playlist } from './models/playlist';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { v4 as uuid4 } from 'uuid';

export class PlaylistService {
  private playlists: Playlist[] = [
    { playlistId: '33', name: 'yassine33', owner: 'azrak33' },
    { playlistId: '11', name: 'yassine11', owner: 'azrak11' },
    { playlistId: '22', name: 'yassine22', owner: 'azrak22' },
  ];

  public createPlaylist(createPlaylistInput: CreatePlaylistInput) {
    const playlist: Playlist = { playlistId: uuid4(), ...createPlaylistInput };
    this.playlists.push(playlist);
    return playlist;
  }

  public getPlaylist(getPlaylistArgs: GetPlaylistArgs) {
    return this.playlists.find(
      (item) => item.playlistId === getPlaylistArgs.playlistId,
    );
  }
}
