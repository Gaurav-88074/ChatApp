import { Client, Account, ID, Databases ,Query} from "appwrite";

const PROJECT_ID = "652115655d5afd906c81";
const DATABASE_ID = "65211579dd1887d97a10";
const COLLECTION_ID = "65211584beb44656c3ad";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
const databases = new Databases(client);
export const fetchMessage = () => {
  return new Promise((resolve, reject) => {
    try {
        databases.getDocument(DATABASE_ID, COLLECTION_ID, "", [
          Query.limit(10000)
        ]).then((obj) => {
            resolve(obj);
        });
    } catch (error) {
        reject(error);
    }
  });
};
