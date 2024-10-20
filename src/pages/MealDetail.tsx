import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface MealDetail {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
}

const MealDetail = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const [mealDetail, setMealDetail] = useState<MealDetail | null>(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => setMealDetail(response.data.meals[0]))
      .catch((error) => console.error("Error fetching meal details:", error));
  }, [mealId]);

  if (!mealDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={mealDetail.strMealThumb} alt={mealDetail.strMeal} className="img-fluid mb-4" />
        </div>
        <div className="col-md-6">
          <h1>{mealDetail.strMeal}</h1>
          <p>{mealDetail.strInstructions}</p>
          {mealDetail.strYoutube && (
            <div className="my-4">
              <h5>Recipe Video</h5>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${mealDetail.strYoutube.split("v=")[1]}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
