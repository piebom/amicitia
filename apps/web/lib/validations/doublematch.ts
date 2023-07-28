import * as z from "zod"

export const doubleMatchSchema = z.object({
    player1Id_team1: z.string(),
    player2Id_team1: z.string(),
    player1Id_team2: z.string(),
    player2Id_team2: z.string(),
    set1Player1: z.string(),
    set1Player2: z.string(),
    set2Player1: z.string().optional(),
    set2Player2: z.string().optional(),
    set3Player1: z.string().optional(),
    set3Player2: z.string().optional(),
})