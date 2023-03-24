const notFound = (req, res) => {
  res.status(404).send("Route Not Found -> 404");
};

module.exports = notFound;
