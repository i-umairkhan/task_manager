const errorHandlerMiddleware = (err, req, res, next) => {
  return res.send(500).json({ msg: err });
};

module.exports = errorHandlerMiddleware;
