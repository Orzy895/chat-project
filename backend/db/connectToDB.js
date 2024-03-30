import mongoose from 'mongoose';

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to DB");
    }
}

export default connectToDB;