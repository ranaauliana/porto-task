const express = require("express");

const router = express.Router();

const adminRouter = require("../controllers/adminController");

router.get("/", adminRouter.getHome);
router.get("/berita", adminRouter.getBerita);
router.get("/dokumen", adminRouter.getDoc);
router.get("/gallery", adminRouter.getGall);
router.get("/profil", adminRouter.getProfile);

router.post("/berita", adminRouter.postBerita);
router.post("/dokumen", adminRouter.postDoc);
router.post("/gallery", adminRouter.postGal);
router.post("/profil", adminRouter.postProf);

module.exports = router;
