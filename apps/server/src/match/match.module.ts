import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { PrismaService } from '@server/prisma.service';

@Module({
    providers: [MatchService, PrismaService],
    exports: [MatchService, PrismaService],
})
export class MatchModule { }
