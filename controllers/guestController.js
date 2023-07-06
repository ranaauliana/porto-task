module.exports = {
  getHome: async (req, res) => {
    try {
      res.render("guest/homePage");
    } catch (error) {
      res.send(error);
    }
  },
};
