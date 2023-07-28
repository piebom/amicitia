import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class MatchService {
    constructor(private prisma: PrismaService) { }

    async getMatches() {
        return this.prisma.match.findMany();
    }

}
