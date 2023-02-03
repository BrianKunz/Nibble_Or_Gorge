const express = require("express");
const router = express.Router();

// Data controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");


router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

/**
 * Recipes - Api routes
 */

// Index - Api
router.get("/api", dataController.index, apiController.index);

// Show - Api
router.get("/api/:id", dataController.show, apiController.show);

// Delete - Api
router.delete("/api/:id", dataController.destroy, apiController.show);

// Update - Api
router.put("/api/:id", dataController.update, apiController.show);

// Create - Api
router.post("/api/", dataController.create, apiController.show);

/**
 * Recipes
*/

// Index
router.get("/", dataController.index, viewController.index);

// All
router.get("/all", dataController.all, viewController.all);

// New
router.get("/new", viewController.newView);

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", dataController.create, viewController.redirectHome);

// Edit
router.get("/:id/edit", dataController.show, viewController.edit);

// Show - Route
router.get("/:id", dataController.show, viewController.show);

// Create Comment
router.post("/:id/comment", dataController.createComment, viewController.redirectShow);

//Comment Delete
router.delete("/:id/comment", dataController.destroyComment, viewController.redirectHome);

module.exports = router;