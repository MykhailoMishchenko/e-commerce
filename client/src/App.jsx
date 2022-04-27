import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
