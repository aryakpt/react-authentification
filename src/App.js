import React, { useContext } from "react";
import "./App.css";
import { AuthContext } from "./contexts";
import { Home, Login } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!authCtx.isLoggedIn ? (
        <Login />
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          <main>
            <Home />
          </main>
          {/* <footer>
            <Footer />
          </footer> */}
        </>
      )}
    </>
  );
}

export default App;
