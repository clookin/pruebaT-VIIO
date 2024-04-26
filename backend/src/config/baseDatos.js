// Importar las dependecias 
import mongoose from 'mongoose';

const connectMongo =async() => {
  await mongoose.connect(process.env.DB_URL,{})
  try {
    console.log("status 200");
  } catch (error) {
    console.log("error", error.message);
  }
}
export default connectMongo