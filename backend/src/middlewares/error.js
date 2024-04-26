const handleError = (error, req, res, next) => {
  const { status, errorContent, message } = error;
  console.log("capturing the error");
  res.status(status).json({
    message,
    error: errorContent.message,
  });
};

export default handleError;