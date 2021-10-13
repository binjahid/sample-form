import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Firebase/Firebase.init";
initFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvide = new GoogleAuthProvider();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("i am currently active uesr", user);
        setUser(user);
      }
    });
  }, []);
  const registrationUsingGoogle = () => {
    signInWithPopup(auth, googleProvide)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    registrationUsingGoogle,
    user,
    error,
  };
};
export default useFirebase;
