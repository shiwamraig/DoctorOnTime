import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;

    if (!dtoken) {
      return res.json({
        success: false,
        message: "user token not found",
      });
    }
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    req.body.docId = token_decode.id; //It adds the user’s ID into the req.body backpack so the backend knows:

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { authDoctor };
