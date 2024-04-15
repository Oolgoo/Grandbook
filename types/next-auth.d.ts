
import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string;
    jwt?: string;
    id?: string;
    user:{
      name?: string;
      id?: string;
    }

  }
}

