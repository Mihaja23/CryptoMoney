exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to our trading platform! Log in to access the dashboards.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Trading dashboards");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin content");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator content");
};
