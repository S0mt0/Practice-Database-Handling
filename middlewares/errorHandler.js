const errorHandler = (err, req, res, next) => {
  res.status(500).json({ status: "failure", message: err });
};

module.exports = errorHandler;
