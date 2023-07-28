import { Injectable } from '@nestjs/common';
import { Match } from '@prisma/client';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class MatchService {
    constructor(private prisma: PrismaService) { }

    async getMatches() {
        return this.prisma.match.findMany({
            include: {
                player1: true,
                player2: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createMatch(match: Match) {
        return this.prisma.match.create({
            data: {
                court: match.court,
                player1Id: match.player1Id,
                player2Id: match.player2Id,
                score: match.score as string,
                seasonId: match.seasonId,
            },
        });
    }
}
