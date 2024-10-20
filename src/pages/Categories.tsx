import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">mealapp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">Foods</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ingredients">Ingredients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/local-culinary">Local Culinary</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>Meal Categories</h1>
        < div className="row">
          {categories.map((category) => (
            <div className="col-md-4" key={category.idCategory}>
              <div className="card mb-4">
                <img
                  src={category.strCategoryThumb}
                  className="card-img-top"
                  alt={category.strCategory}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.strCategory}</h5>
                  <Link to={`/category/${category.strCategory}`} className="btn btn-primary">
                    View Meals
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;