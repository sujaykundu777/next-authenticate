import NextAuth, { CredentialsSignin } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: { prompt: "consent", access_type: "offline", response_type: "code"}
      }
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
        authorize: async (credentials) => {

          // check if user exists           
          if (!credentials.email || !credentials.password) {
           throw new CredentialsSignin("please provide all detailssss");
          }

          //   if (password !== "passcode") {
          //     throw new CredentialsSignin({ cause: "password doesn't match" });
          //     }

          const res = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const result = await res.json();

          if (!res.ok) {
            throw new Error('User not found')
          }
          return result.user;
      },
    }),
  ],
})