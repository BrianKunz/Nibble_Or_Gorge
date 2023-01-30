const Recipe = require("../../models/recipe");
const Comment = require("../../models/comment");

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
  all(req, res, next) {
    Recipe.find({}, (error, allRecipes) => {
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
    req.body.lactoseIntolerant = req.body.lactoseIntolerant === "on" ? true : false;
    req.body.glutenFree = req.body.glutenFree === "on" ? true : false;
    req.body.vegetarian = req.body.vegetarian === "on" ? true : false;
    req.body.vegan = req.body.vegan === "on" ? true : false;
    req.body.kosher = req.body.kosher === "on" ? true : false;
    req.body.keto = req.body.keto === "on" ? true : false;
    req.body.diabetic = req.body.diabetic === "on" ? true : false;
    req.body.dairyFree = req.body.dairyFree === "on" ? true : false;
    req.body.lowCarb = req.body.lowCarb === "on" ? true : false;
    req.body.nutAllergy = req.body.nutAllergy === "on" ? true : false;
    req.body.wheatAllergy = req.body.wheatAllergy === "on" ? true : false;
    req.body.fishShellfishAllergy = req.body.fishShellfishAllergy === "on" ? true : false;
    req.body.eggAllergy = req.body.eggAllergy === "on" ? true : false;
    req.body.soyAllergy = req.body.soyAllergy === "on" ? true : false;
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
    Recipe.findById(req.params.id).populate('username').populate('comments').exec((error, foundRecipe) => {
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
    req.body.lactoseIntolerant = req.body.lactoseIntolerant === "on" ? true : false;
    req.body.glutenFree = req.body.glutenFree === "on" ? true : false;
    req.body.vegetarian = req.body.vegetarian === "on" ? true : false;
    req.body.vegan = req.body.vegan === "on" ? true : false;
    req.body.kosher = req.body.kosher === "on" ? true : false;
    req.body.keto = req.body.keto === "on" ? true : false;
    req.body.diabetic = req.body.diabetic === "on" ? true : false;
    req.body.dairyFree = req.body.dairyFree === "on" ? true : false;
    req.body.lowCarb = req.body.lowCarb === "on" ? true : false;
    req.body.nutAllergy = req.body.nutAllergy === "on" ? true : false;
    req.body.wheatAllergy = req.body.wheatAllergy === "on" ? true : false;
    req.body.fishShellfishAllergy = req.body.fishShellfishAllergy === "on" ? true : false;
    req.body.eggAllergy = req.body.eggAllergy === "on" ? true : false;
    req.body.soyAllergy = req.body.soyAllergy === "on" ? true : false;
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
  async comment (req, res, next) {
    const {
      body: {body, rating},
      params: {id},
    } = req;
    try {
      const createdComment = await Comment.create({
        body,
        rating,
        recipe: id,
      });
      // Save that comment on the recipe
      const updatedRecipe = Recipe.findByIdAndUpdate(id, {
        $push: { comments: createdComment._id },
      }).exec();
      res.json(updatedRecipe);
      next();
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      });
    }
  },
  destroyComment (req, res, next) {
    const { id } = req.params;
    const { commentID } = req.body;
    Recipe.findById(id, async (error, foundRecipe) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
        return;
      }
      await foundRecipe.comments.pull(commentID);
      const saved = await foundRecipe.save();
      res.json(saved);
      next();
    });
  }
};

module.exports = dataController;