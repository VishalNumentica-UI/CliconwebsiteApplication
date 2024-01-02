import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("658d058f20e9487764ca");

export const account = new Account(client);

export const databases = new Databases(client);
