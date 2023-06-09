import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials as any;
        const listUser = [
          { email: "letruc@gmail.com", password: "123" },
          { email: "letruc321@gmail.com", password: "123" },
          { email: "sofia@gmail.com", password: "2908" },
        ];
        const user = { id: "1", username: username, password: password };
        const account = listUser.find(
          (user) => user.email === username && user.password === password,
        );
        if (account) {
          return user;
        }
        return null;
        // Return null if user data could not be retrieved
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
