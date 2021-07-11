import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PlaylistModule } from './playlist/palylist.module';

@Module({
  imports: [
    PlaylistModule, 
    GraphQLModule.forRoot({
      include: [PlaylistModule],
      autoSchemaFile: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
