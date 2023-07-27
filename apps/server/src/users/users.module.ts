
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '@server/prisma.service';

@Module({
    providers: [UsersService, PrismaService],
    exports: [UsersService, PrismaService],
})
export class UsersModule { }
