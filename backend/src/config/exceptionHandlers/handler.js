// 404 Error Handler
function LostErrorHandler(req, res, next) {
  res.status(404);

  res.json({
    error: "Resource not found",
  });
}

module.exports = { LostErrorHandler };
