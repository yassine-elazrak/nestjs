import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PlaylistService } from './playlist.service';
import { Playlist } from './models/playlist';
import { GetPlaylistArgs } from './dto/args/get-playlist.args';
import { CreatePlaylistInput } from './dto/input/create-playlist.input';
import { PubSub } from 'graphql-subscriptions';
import { subscribe } from 'graphql';



@Resolver(() => Playlist)
export class PlaylistResolver {

  private pubSub: PubSub;
  constructor(private readonly palylistService: PlaylistService) { 
    this.pubSub = new PubSub();
  }

  @Query(() => Playlist)
  async getPlaylist(@Args() getPlaylistArgs: GetPlaylistArgs) {
    let playlist = await this.palylistService.getPlaylist(getPlaylistArgs);
    return playlist;
  }

  @Mutation(() => Playlist)
  async createPlaylist(@Args('createPlaylistInput') createPlaylistInput: CreatePlaylistInput) {
    let playlist = await this.palylistService.createPlaylist(createPlaylistInput)
    console.log("\n\n\nCreatePlaylit push ==> mutation")
    this.pubSub.publish('CreatePlaylit', { CreatePlaylist: playlist });

    return playlist;
  }
  @Subscription(() => Playlist)
  async playlistCreat() {
    console.log("CreatePlaylit pop ==> subscription\n\n\n")
    return await this.pubSub.asyncIterator('CreatePlaylit');
  }
}
