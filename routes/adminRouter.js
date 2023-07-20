const express = require("express");

const router = express.Router();

const adminRouter = require("../controllers/adminController");

// tampilan route
router.get("/", adminRouter.getHome);
router.get("/berita", adminRouter.getBerita);
router.get("/dokumen", adminRouter.getDoc);
router.get("/gallery", adminRouter.getGall);
router.get("/profil", adminRouter.getProfile);

//api route
router.get("/api/berita", adminRouter.getDataBerita);
router.get("/api/berita/:id", adminRouter.getIdBerita);
router.post("/api/berita/:id", adminRouter.editBerita);
router.get("/api/berita/delete/:id", adminRouter.deleteBerita);

router.post("/berita", adminRouter.postBerita);
router.post("/dokumen", adminRouter.postDoc);
router.post("/gallery", adminRouter.postGal);
router.post("/profil", adminRouter.postProf);

module.exports = router;
