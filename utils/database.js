import mongoose from "mongoose";

let isConnected = false;


export const connectDB= async ()=>{

mongoose.set('strictQuery',true);


if(isConnected){

console.log('Mongo is already connected');

return;


}





try {
    await mongoose.connect(process.env.MONGODB_URI,{
dbName:"shareprompt",
useNewUrlParser :true,
useUnifiedTopology:true,

    })

    isConnected=true;


    console.log('MongoDb connected')
} catch (error) {
   console.log(error)
}



}

