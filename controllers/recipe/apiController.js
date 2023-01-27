const apiController = {
    index(req, res, next) {
      res.json(res.locals.data.recipes);
    },
    show(req, res, next) {
      res.json(res.locals.data.recipe);
    },
  };

  module.exports = apiController;