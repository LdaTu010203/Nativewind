import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";
import SignIn from "./../app/(auths)/SignIn/sign_in";
export const config = {
  endpoint: "https://cloud/.appwrite.io/v1",
  platform: "com.jsm.vietgangz",
  projectId: "6695e8d7002bf330d342",
  databaseId: "6695ead0003b1a9f626a",
  userCollectionId: "6695eb12001580beabd4",
  imgCollectionId: "6695eb76003dbc9465d9",
  StorageId: "6695ed530034a8082491",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      username,
      email,
      password
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatar.getInitials(username);

    await SignIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function SignIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
