const Recipe = require("../../models/recipe");

const dataController = {
  index(req, res, next) {
    Recipe.find({ username: req.session.username }, (error, allRecipes) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.recipes = allRecipes;
        next();
      }
    });
  },
  create(req, res, next) {

    req.body.username = req.session.username;
    Recipe.create(req.body, (error, createdRecipe) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.recipe = createdRecipe;
        next();
      }
    });
  },
  show(req, res, next) {
    Recipe.findById(req.params.id, (error, foundRecipe) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.recipe = foundRecipe;
        next();
      }
    });
  },
  update(req, res, next) {
    Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedRecipe) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.recipe = updatedRecipe;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    Recipe.findByIdAndRemove(req.params.id, (error, recipe) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.recipe = recipe;
        next();
      }
    });
  },
};

module.exports = dataController;