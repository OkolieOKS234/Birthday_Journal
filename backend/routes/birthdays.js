const express = require("express")
const {
createBirthday,
getBirthday,
getBirthdays,
deleteBirthday,
updateBirthday,
} 
= require("../controller/birthdayController")

// importing our schema


const router = express.Router()
// get all the birthdays
router.get("/", getBirthdays)

// get birthday by id
router.get("/:id", getBirthday)

// Post a new birthday
router.post("/", createBirthday )




  

    // delete a birthday
    router.delete("/:id", deleteBirthday)
        // Update a birthday
    router.patch("/:id", updateBirthday)
        

module.exports = router;