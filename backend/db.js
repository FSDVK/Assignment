const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://G0F00d:go573@cluster0.68wph3j.mongodb.net/goFoodMern?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://kVijay:ssvkment18199@cluster0.5ljbfy1.mongodb.net/Assignment_Data?retryWrites=true&w=majority"
const mongoDB = async() => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result)=>{
        if (err) console.log("---" + err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("Data");
            fetched_data.find({}).toArray(async function (err, data) { 
//                 const foodCategory = await mongoose.connection.db.collection("foodCat");
//                 foodCategory.find({}).toArray(function (err, catData) {    
                    if (err) console.log(err);
                    else {
                        console.log();                        
                    }
            })
        }
    });
}


module.exports = mongoDB;