import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import dbconnection from './Database/watch.js'
import WatchRoutes from './Routes/watch.js';
import authroutes from './Routes/user.js'
import customerroute from './Routes/customer.js'



const app = express();
//Middlewares
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());


//Routing
app.use("/admin",WatchRoutes);
app.use("/auth",authroutes);
app.use("/api/customer",customerroute);



//Listening to the server

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
});

//Database connection
dbconnection();