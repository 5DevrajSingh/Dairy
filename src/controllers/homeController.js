exports.home = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Fresh Node.js API 🚀",
  });
};
