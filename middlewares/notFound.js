const notFound = (req, res, next) => {
  res.status(404).send(
    `<h3>Sorry, it seems like the page you are looking for does not exist, or has moved permanently.</h3> <a href=" /
        ">Go back to home page.</a>`
  );
};

module.exports = notFound;
