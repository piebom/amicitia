import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions, User } from "next-auth"
import axios from "axios"
import { JWT } from "next-auth/jwt"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const user = await axios.post("http://localhost:4000/auth/login", { "email": credentials?.email, "password": credentials?.password }).then(res => res.data)
                    if (user) {
                        return user
                    }
                } catch (e) {
                    console.log(e)
                }
                return null
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.access_token = user.access_token
                token.user = user.user
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user
                session.access_token = token.access_token
            }
            return session
        }


    }
}