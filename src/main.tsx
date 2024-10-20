import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import MealDetail from "./pages/MealDetail";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryDetail />} />
        <Route path="/meal/:mealId" element={<MealDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
