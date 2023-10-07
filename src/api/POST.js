import { Client, Account, ID, Databases } from "appwrite";

const PROJECT_ID = "652115655d5afd906c81";
const DATABASE_ID = "65211579dd1887d97a10";
const COLLECTION_ID = "65211584beb44656c3ad";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
const databases = new Databases(client);
export const storeMessage = (user_id, body, userName) => {
  const promise = databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID,
    ID.unique(),
    {
      user_id: user_id,
      body: body,
      userName:userName,
    }
  );
  return promise;
};
