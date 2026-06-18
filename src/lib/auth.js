
import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "better-auth/adapters/mongodb"

const client = new MongoClient(process.env.MONGODB_URI)
const db = client.db("prompt")

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, { client }),

  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "user",
      },
      plan: {
        type: "string",
        default: "user_free",
      },
    },
  },

  hooks: {
    user: {
      create: async ({ user, account }) => {
        return {
          ...user,

          // 🔥 FORCE ROLE LOGIC
          role: account?.provider === "google" ? "user" : user.role || "user",

          // default plan
          plan: "user_free",
        }
      },
    },
  },
})




// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db('prompt');
// export const auth = betterAuth({
//       emailAndPassword: { 
//       enabled: true, 
//   }, 
//   socialProviders: { 
//     google: { 
//       clientId: process.env.GOOGLE_CLIENT_ID , 
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
//     }, 
//   }, 
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//   user:{
//     additionalFields:{
//         role:{
//             default:'user'
//         },
//          plan:{
//         default:'user_free'
//       }
//     }
//   }
// });