const express = require("express");
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");
const jwtMiddleware = require("../middleares/jwtMiddleware");
const multerMiddleware = require("../middleares/multireMiddleware");
const router = new express.Router();

// register
router.post("/register", userController.registerController);

// login
router.post("/login", userController.logicController);

// add project
router.post(
  "/project/add",
  jwtMiddleware,
  multerMiddleware.single("projectImg"),
  projectController.addProjectController
);

// home project
router.get("/get-home-projects", projectController.getHomeProjects);

// all project
router.get(
  "/all-projects",
  jwtMiddleware,
  projectController.allProjectsController
);

// user project
router.get(
  "/user-projects",
  jwtMiddleware,
  projectController.getuserProjectsController
);

module.exports = router;
