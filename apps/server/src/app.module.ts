import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { AuthModule } from './auth/auth.module';
import { MatchService } from './match/match.service';
import { MatchModule } from './match/match.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { DoublematchModule } from './doublematch/doublematch.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule, AuthModule, MatchModule, UsersModule, DoublematchModule],
  controllers: [AppController],
  providers: [AppService, MatchService, UsersService],
})
export class AppModule { }
