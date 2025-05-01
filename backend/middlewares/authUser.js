import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "user token not found",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.id; //It adds the user’s ID into the req.body backpack so the backend knows:

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { authUser };
