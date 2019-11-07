module.exports = asyncFn => {
  return async (req, res, next) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      console.error(error);
      res.status(500).send("서버 에러 발생!!");
      return next();
    }
  };
};
