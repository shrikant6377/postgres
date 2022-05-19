const express =require("express")
const router= express.Router();

const urlcontroller= require("../controllers/urlcontroller")

router.post("/url/shorten",urlcontroller.createurl)
router.get("/:urlCode",urlcontroller.geturl)
module.exports =router;
