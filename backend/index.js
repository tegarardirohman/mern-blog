import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("MongoDB is connected")
})
.catch(err => {
    console.log("Cannot connect to the DB" + err)
});

const app = express();

app.listen(3000, ()=> {
    console.log('Server berjalan di port 3000');
});