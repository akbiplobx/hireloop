import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// মঙ্গোডিবি ক্লায়েন্ট তৈরি
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(); 

export const auth = betterAuth({
  database: mongodbAdapter(db), // মঙ্গোডিবি অ্যাডাপ্টার সরাসরি যুক্ত করা হলো
  emailAndPassword: { 
    enabled: true, 
  },
});