const moongose=require('mongoose');

//connecting to mongoDB Atlas 
moongose.connect('mongodb+srv://System:root@cluster0.k8yy0.mongodb.net/ProUser?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(ok=>console.log("Connected to MongoDB "))
.catch(err=>console.log("Failed to Connect to MongoDB",err))
module.exports=moongose;