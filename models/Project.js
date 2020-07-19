const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: String,
    subtitle: String,
    description: String,
    githubLink: String,
    liveLink: String,
    imageURL: String,
    technologies: []
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;