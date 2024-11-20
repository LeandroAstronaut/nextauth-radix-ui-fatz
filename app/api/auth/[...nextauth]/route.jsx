import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        Email: {
          label: "Email",
          type: "email",
          placeholder: "user@something.com",
        },
        Clave: { label: "Clave", type: "password" },
      },
      async authorize(credentials) {
        const { Email, Clave } = credentials;

        const userFound = await prisma.usuarios.findUnique({
          where: { Email },
        });

        if (!userFound) throw new Error("Invalid credentials");

        // Comparar la contraseña
        const validPassword = await bcrypt.compare(Clave, userFound.Clave);

        if (!validPassword) throw new Error("Invalid credentials");

        return {
          id: userFound.Id.toString(),
          name: userFound.Nombre,
          email: userFound.Email,
          rolid: userFound.RolId,
          inmobiliariaid: userFound.InmobiliariaId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.rolid = user.rolid;
        token.inmobiliariaid = user.inmobiliariaid;

      }


      return token;
    },
    async session({ session, user, token }) {


      if (token) {
        session.user.id = token.sub ;
        session.user.rolid = token.rolid ;
        session.user.inmobiliariaid = token.inmobiliariaid;
      }

      console.log(session)
      console.log(token)

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
