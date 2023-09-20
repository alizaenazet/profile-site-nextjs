import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/utils/db"
import User from "@/models/User"
import bcrypt from "bcryptjs";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        try {
            await dbConnect()
            const user = await User.findOne({email: credentials.email})
            
            if (user === null) {
                throw new Error("User not found!");}
    
            const isValid = await bcrypt.compare(credentials.password,user.password);
            if (!isValid) throw new Error("Wrong Credentials!");
            return user;
        } catch (error) {
            console.log(error);
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login"
  }
})

export { handler as GET, handler as POST };
