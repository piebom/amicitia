import { Module } from '@nestjs/common';
import { DoublematchService } from './doublematch.service';
import { PrismaService } from '@server/prisma.service';

@Module({
  providers: [DoublematchService, PrismaService],
  exports: [DoublematchService, PrismaService]
})
export class DoublematchModule { }
