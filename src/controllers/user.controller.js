import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  //validation - empty
  //check if user already exists: username, email
  //check for images, check for avatar
  //upload them to cloudinary, avatar
  //create user object - create entry in db
  //remove password and refresh token fields from response
  //check for user creation
  //return res

  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new apiError(400, " All fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new apiError(409, "User with the email or username already exists");
  }
});

export { registerUser };
