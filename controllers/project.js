const ProjectHelper = require("../models/project");

exports.getAllProjects = (req, res) => {
  ProjectHelper.getAllProject((result) => {
    res.json(result);
  });
};

exports.addProject = (req, res) => {
  const newProject = new ProjectHelper(
    req.body.projectTitle,
    req.body.projectDescription,
    req.body.projectLink,
    req.body.projectImageURI
  );

  newProject.save((result) => {
    res.json(result);
  });
};

exports.removeProject = (req, res) => {
  ProjectHelper.remove(req.params.id, (result) => {
    res.json(result);
  });
};