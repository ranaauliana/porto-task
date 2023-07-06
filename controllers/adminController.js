const Berita = require("../models/beritaModel");
const Doc = require("../models/docModel");
const Galeri = require("../models/galeriModel");
const Profil = require("../models/profilModel");
const Exp = require("../models/pengalamanModel");

module.exports = {
  getHome: async (req, res) => {
    try {
      res.render("admin/home");
    } catch (error) {
      res.send(error);
    }
  },
  getBerita: async (req, res) => {
    try {
      let berita = await Berita.find();

      res.render("admin/berita", { berita });
    } catch (error) {
      res.send(error);
    }
  },
  postBerita: async (req, res) => {
    try {
      const { judul, isi_berita } = req.body;

      let berita = await Berita({ judul, isi_berita });
      berita.save();
      res.redirect("/admin/berita");
    } catch (error) {
      res.send(error.message);
    }
  },

  getDoc: async (req, res) => {
    try {
      let doc = await Doc.find();

      res.render("admin/document", { doc });
    } catch (error) {
      res.send(error);
    }
  },
  postDoc: async (req, res) => {
    try {
      const { file } = req.file;
      const { judul } = req.body;

      console.log("file :" + file);

      let doc = await Doc({ judul });
      doc.save();
      res.redirect("/admin/dokumen");
    } catch (error) {
      res.send(error.message);
    }
  },
  getGall: async (req, res) => {
    try {
      let galeri = await Galeri.find();

      res.render("admin/gallery", { galeri });
    } catch (error) {
      res.send(error);
    }
  },
  postGal: async (req, res) => {
    try {
      const { judul, desc } = req.body;

      let galeri = await Galeri({ judul, desc });
      galeri.save();
      res.redirect("/admin/gallery");
    } catch (error) {
      res.send(error.message);
    }
  },
  getProfile: async (req, res) => {
    try {
      res.render("admin/profile");
    } catch (error) {
      res.send(error);
    }
  },
  postProf: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        tlp,
        alamat,
        linkedin,
        github,
        kota,
        kec,
        kodepos,
        desc,
      } = req.body;

      let profil = await Profil({
        firstName,
        lastName,
        email,
        tlp,
        alamat,
        linkedin,
        github,
        kota,
        kec,
        kodepos,
        desc,
      });
      profil.save();
      res.redirect("/admin/profil");
    } catch (error) {
      res.send(error.message);
    }
  },
  postExp: async (req, res) => {
    try {
      const {
        org,
        posisi,
        desc_org,
        loc,
        startMonth,
        startYear,
        endMonth,
        endYear,
      } = req.body;

      let exp = await Exp({
        org,
        posisi,
        desc_org,
        loc,
        startMonth,
        startYear,
        endMonth,
        endYear,
      });
      exp.save();
      res.redirect("/admin/profil");
    } catch (error) {
      res.send(error.message);
    }
  },
};
