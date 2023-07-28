import { Injectable } from '@nestjs/common';
import { DoubleMatch } from '@prisma/client';
import { PrismaService } from '@server/prisma.service';

@Injectable()
export class DoublematchService {
    constructor(private prisma: PrismaService) { }

    async getMatches() {
        return this.prisma.doubleMatch.findMany({
            include: {
                player1_team1: true,
                player2_team1: true,
                player1_team2: true,
                player2_team2: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createMatch(match: DoubleMatch) {
        return this.prisma.doubleMatch.create({
            data: {
                court: match.court,
                player1Id_team1: match.player1Id_team1,
                player2Id_team1: match.player2Id_team1,
                player1Id_team2: match.player1Id_team2,
                player2Id_team2: match.player2Id_team2,
                score: match.score as string,
                seasonId: match.seasonId,
            },
        });
    }
}
