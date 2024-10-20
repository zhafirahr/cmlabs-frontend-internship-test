import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryDetail = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => setMeals(response.data.meals))
      .catch((error) => console.error("Error fetching meals:", error));
  }, [categoryName]);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Meals in {categoryName}</h1>
      <div className="row">
        {meals.map((meal) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={meal.idMeal}>
            <div className="card h-100">
              <img
                src={meal.strMealThumb}
                className="card-img-top img-fluid"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{meal.strMeal}</h5>
                <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary d-block mt-3">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetail;
