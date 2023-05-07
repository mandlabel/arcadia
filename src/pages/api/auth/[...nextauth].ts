import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

/**
 * Creates a NextAuth configuration object with Google provider.
 *
 * @function createNextAuthConfig
 * @returns {object} The NextAuth configuration object.
 */
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
})
