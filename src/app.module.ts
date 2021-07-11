import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PlaylistModule } from './playlist/palylist.module';
import { join } from 'path';

@Module({
  imports: [
    PlaylistModule, 
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
