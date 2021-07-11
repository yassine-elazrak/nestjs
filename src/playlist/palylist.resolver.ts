import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlaylistService } from './playlist.service';
import { Playlist } from './models/playlist';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';

@Resolver(() => Playlist)
export class PlaylistResolver {
  constructor(private readonly palylistService: PlaylistService) {}

  @Query(() => Playlist)
  getPlaylist(@Args() getPlaylistArgs: GetPlaylistArgs) {
    let playlist = this.palylistService.getPlaylist(getPlaylistArgs);
    return playlist;
  }

  @Mutation(() => Playlist)
  createPlaylist(@Args('createPlaylistInput') createPlaylistInput: CreatePlaylistInput) {
    let playlist = this.palylistService.createPlaylist(createPlaylistInput)
    return playlist;
  }
}
