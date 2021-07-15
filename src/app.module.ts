import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PlaylistModule } from './playlist/palylist.module';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PlaylistModule,
    PrismaModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
    }),
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
