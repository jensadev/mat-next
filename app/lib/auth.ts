import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Twitch from "next-auth/providers/twitch"
import type { NextAuthConfig } from "next-auth"

// import { prisma } from "@/app/lib/prisma"

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user

      const isOnProtected =
        nextUrl.pathname.startsWith("/meal") ||
        nextUrl.pathname.startsWith("/dish")
      if (isOnProtected) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      }
      return true
    },
  },
} satisfies NextAuthConfig

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  ...authConfig,
  providers: [GitHub, Google, Twitch],
})
