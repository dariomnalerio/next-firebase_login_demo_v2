import {
  getAuth,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

export const UpdateUser = (
  firstName?: string,
  lastName?: string,
  age?: string,
  password?: string,
  email?: string
) => {
  const auth = getAuth();

  // Update user profile
  if (auth.currentUser) {
    if (firstName && lastName) {
      updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName,
      });
    }

    if (email) {
      updateEmail(auth.currentUser, email)
        .then(() => console.log("email updated"))
        .catch((error) => {
          console.log(error);
        });
    }

    if (password) {
      updatePassword(auth.currentUser, password)
        .then(() => console.log("password updated"))
        .catch((error) => {
          console.log(error);
        });
    }

    // TODO: send data to db
  } else {
    console.log("no user signed in");
  }
};
