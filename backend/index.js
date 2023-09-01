import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
console.log("test");

app.use(cors());

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/', postRoutes);

app.get("/", (req, res) => {
  res.json("Success");
});

app.use(cors({
  origin: 'https://bzb-busybee.vercel.app', 
  credentials: true, 
}));

const PORT = process.env.PORT|| 5000;

mongoose.connect("mongodb+srv://fatim:12345@cluster0.jj5p27d.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Success! Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);