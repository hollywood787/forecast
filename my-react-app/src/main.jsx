import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./js/store";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/about";

const update = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about"  element={<About />} exact/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

update();

store.subscribe(update);
