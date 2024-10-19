import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: ({ email, password }) => {
        // check is user exist in you database or not
        const user = { email: "abcd@gmail.com", id: "111" };
        console.log(email, password);

        if (!email || !password) {
            throw new CredentialsSignin("please provide all detailssss");
          }

        if (password !== "passcode") {
          throw new CredentialsSignin({ cause: "password doesn't match" });
        } else return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
