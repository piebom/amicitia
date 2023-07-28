import * as z from "zod"

export const singleMatchSchema = z.object({
    player1Id: z.string(),
    player2Id: z.string(),
    set1Player1: z.string(),
    set1Player2: z.string(),
    set2Player1: z.string().optional(),
    set2Player2: z.string().optional(),
    set3Player1: z.string().optional(),
    set3Player2: z.string().optional(),
})