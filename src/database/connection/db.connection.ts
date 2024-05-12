import mongoose from "mongoose";

export default async function ConnectDB() {
  try {
    const databaseConnection = await mongoose.connect(
      `${process.env.MONGO_URI}/video-buddy`
    );
    if (databaseConnection.STATES.connected) {
      console.log(
        `Database successfully connected | ${databaseConnection.connection.host}`
      );
      return true;
    } else {
      throw Error("Uable to connect to the Database!");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
