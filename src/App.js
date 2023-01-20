import React from "react";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Home />
      </main>
    </BrowserRouter>
  );
}

export default App;
