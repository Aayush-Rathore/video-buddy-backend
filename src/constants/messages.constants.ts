export const StatusCode = {
  SUCCESS: 200,
  INCORRECT_PASSWORD: 401,
  VALIDATION_ERROR: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  UNAUTHORIZED: 401,
  DUPLICATE: 409,
  SERVER_ERROR: 500,
};

export const StatusMessages = {
  SUCCESS: "Success",
  INCORRECT_PASSWORD: "Incorrect Password!",
  VALIDATION_ERROR: "Validation Failed, Try again!",
  NOT_FOUND: "User not found!",
  INTERNAL_ERROR: "Something went wrong!",
  UNATHORIZED: "Unauthorized!",
  NOT_GRANTED: "You do not have permission to use this service!",
  ALREADY_IN_USE: "Already in use!",
  SERVER_ERROR: "Something went wrong!",
};

export const ResponseMessages = {
  LOGIN_SUCCESS: "Loged-In successfully!",
  SIGN_UP_SUCCESS: "Successfully created a new account!",
  INCORRECT_PASSWORD:
    "Incorrect password, please try again later with different password!",
  VALIDATION_ERROR:
    "Validation Failed, Please check your request and try again by using other credentials!",
  NOT_FOUND: "User not found, Please try again with different credentials!",
  INTERNAL_ERROR:
    "Something is wrong at server side, Please try again after some time!",
  UNATHORIZED: "User is not authorized, Please login lo continue!",
  NOT_GRANTED:
    "Unauthorized, Only authorized user can access restricted services!",
  ALREADY_IN_USE: "Found an account with provided credentials",
  SERVER_ERROR: "Something went wrong at server site!",
};
