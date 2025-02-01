const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./connectDb/connectDb")
const indexroute=require("./router/index")
const cors=require("cors")

connectDb();
app.use(cors());
app.use(express.json());
app.use("/api/admin",indexroute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})