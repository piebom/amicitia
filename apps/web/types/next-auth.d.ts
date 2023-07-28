import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string
type access_token = string

declare module "next-auth/jwt" {
    interface JWT {
        user: User,
        access_token: access_token
    }
}

declare module "next-auth" {
    interface Session {
        user: User & {
            id: UserId
        },
        access_token: access_token
    }
    interface User {
        user: User,
        access_token: access_token
    }
}