module.exports = function(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  //admin case pass contol to the next middlware function, which is the route handler
  next();
};
