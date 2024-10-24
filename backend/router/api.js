const router = require("express").Router();
const userCon = require("../Controller/user");

router.get("/", userCon.fileController);
router.get("/form", userCon.homePageController);
router.post("/userdata", userCon.userDataContoller);
router.get("/data", userCon.dataController);
router.get("/mainuser/:id", userCon.mainUserController);
router.post("/updateValue/:upid", userCon.updateValueContorller);
module.exports = router;

// MVC
// M = models = tables(collections)
// V = Views = templates files (ejs, pug)
// C = Controller = (req,res)=>{}

// Router = api(get,post,put,delete)
