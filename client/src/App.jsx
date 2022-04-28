import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
