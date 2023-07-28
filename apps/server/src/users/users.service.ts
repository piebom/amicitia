import { Injectable } from '@nestjs/common';
import { PrismaService } from '@server/prisma.service';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findOne(email: string): Promise<User | undefined> {
        return this.prisma.user.findUnique({
            where: {
                email: email
            }
        });
    }

    async getAllUsers() {
        const users = await this.prisma.user.findMany();
        // only return the id and name
        return users.map(({ id, name }) => ({ id, name }));
    }
}
