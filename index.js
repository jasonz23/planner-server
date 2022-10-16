import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from './routes/index.js';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/tasks', postRoutes);
//cors must be run first then postRoutes
app.get("/",(req,res) => {
     res.send("hehe")
});

const c = "mongodb+srv://cowman:CpErBFYosbumhE7c@cluster0.blwzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = c || 3000;


mongoose.connect(PORT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));