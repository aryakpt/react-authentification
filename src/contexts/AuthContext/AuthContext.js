import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionName, setSessionName] = useState();

  useEffect(() => {
    const LOCAL_IS_LOGGED_IN = localStorage.getItem("LOCAL_IS_LOGGED_IN");
    const LOCAL_loggedUser = localStorage.getItem("LOCAL_USER");
    if (LOCAL_IS_LOGGED_IN === "true") {
      setIsLoggedIn(LOCAL_IS_LOGGED_IN);
      setSessionName(LOCAL_loggedUser);
    }
  }, []);

  const loginHandler = (username, password) => {
    localStorage.setItem("LOCAL_IS_LOGGED_IN", true);
    setIsLoggedIn(true);
    localStorage.setItem("LOCAL_USER", username);
    setSessionName(username);
  };

  const logoutHandler = (e) => {
    localStorage.setItem("LOCAL_IS_LOGGED_IN", false);
    setIsLoggedIn(false);
    localStorage.setItem("LOCAL_USER", null);
    setSessionName(null);
  };

  return <AuthContext.Provider value={{ isLoggedIn, sessionName, loginHandler, logoutHandler }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
