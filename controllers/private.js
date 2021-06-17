exports.getPrivateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "You got access to the private data in this route",
  });
  next();
};

exports.userPlan = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "you Got acess to the Admin route",
  });
  next();
};
exports.adminPlan = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "you Got acess to the Admin route",
  });
  next();
};
