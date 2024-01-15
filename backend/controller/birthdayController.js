const Birthdays = require("../models/BirthdayModel")
const mongoose = require("mongoose")

// get all birthdays
const getBirthdays = async(req, res) =>{
    // display all the documents and sort by the lastest
    
 const birthdays = await Birthdays.find({}).sort({createdAt: -1})

 res.status(200).json(birthdays);
}


// get a single birthday
const getBirthday = async(req, res)=>{
    const { id } = req.params

    const Birthday = await Birthdays.findById(id);

if(!Birthday){
    return res.status(400).json({error: "No such Birthday present"})
}
res.status(200).json(Birthday)

}





//create a new birthday
const createBirthday = async (req, res) =>{

    // add a document to db
    const {title,fullName, relationship} = req.body
    try{
    const birthday = await Birthdays.create({title,fullName,relationship})
    res.status(200).json(birthday)
    }catch(error){
        console.log(error);
    res.status(500).send('Error creating new birthday')
    }
}


// delete a birthday
const deleteBirthday = async (req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:`No workout with id ${id}`});
}
const birthday = await Birthdays.findOneAndDelete({_id:id})
 
if(!birthday){
    return res.status(404).json({message:"no such birthday found!"})
    }
    return res.status(200).json(birthday)

}

//update a birthday
const updateBirthday=async(req,res)=>{
    const {id} = req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:`No birthday with id ${id}`})
}
const birthday = await Birthdays.findOneAndUpdate({_id:id},{
  ...req.body
})
if(!birthday){
    return res.status(404).json({message:"no such birthday found!"})
    }
res.status(200).json(Birthdays)
}

module.exports = {
    createBirthday,
    getBirthdays,
    getBirthday,
    deleteBirthday,  
    updateBirthday
}