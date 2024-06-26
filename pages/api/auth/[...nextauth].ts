import { DB } from '@/lib/db';
import User from '@/lib/models/user';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/auth',
    signOut: '/auth',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials);
        await DB.connect();
        const user = await User.findOne({ email: credentials!.username });

        if (!user) {
          // Create the user
          console.log('User not found, creating user');
          const hashedPassword = await bcrypt.hash(credentials!.password, 10);

          const newUser = new User({
            email: credentials!.username,
            password: hashedPassword,
            provider: 'credentials',
          });

          await newUser.save();

          return newUser;
        } else {
          const match = await bcrypt.compare(
            credentials!.password,
            user.password
          );
          if (match) {
            return user;
          } else {
            return null;
          }
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
export default NextAuth(authOptions);
