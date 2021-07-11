import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Playlist {
  @Field()
  playlistId: string;

  @Field()
  name: string;

  @Field()
  owner: string;
}
