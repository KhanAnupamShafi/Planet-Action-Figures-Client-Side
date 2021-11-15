import { useEffect, useState } from "react";
import initializeFirebase from "../pages/SignUp/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

// Firebase Initialization Step
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        //saver user to Mongo Db
        saveUserToDb(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const user = result.user;
        const redirect_uri = location?.state?.from || "/";
        history.replace(redirect_uri);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //Save user
  const saveUserToDb = (email, displayName) => {
    const user = { email, displayName };

    fetch("https://murmuring-bayou-10657.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  //check admin
  useEffect(() => {
    const url = `https://murmuring-bayou-10657.herokuapp.com/users/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        console.log(url, data);
      });
  }, [user?.email]);

  // User Observer setup step
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return { user, admin, registerUser, signInUser, logOut, isLoading, error };
};

export default useFirebase;
