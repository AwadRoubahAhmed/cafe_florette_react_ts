import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataType } from "./Types";

type RecipeDetailsProps = {
  recipeId?: string | undefined;
};

export default function RecipeDetails() {
  // State;
  const [recipe, setRecipe] = useState<DataType>();
  const { recipeId } = useParams<RecipeDetailsProps>();

  // Comportement;
  useEffect(() => {
    //Fetch recipe data from an API using the recipeId parameter$
    console.log("monté du composant");
    fetch(`https:themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        console.log(data.meals[0]);
      })
      .catch((error) =>
        console.error("Error of the Fetch data recipes:", error)
      );
  }, [recipeId]);

  // Affichage(render);
  return (
    <div className="w-full min-h-screen bg-gray-300 text-gray-800  p-8 rounded-lg">
      <h2 className="text-2xl md:text-3xl text-center">
        {" "}
        Find your recipe details here
      </h2>
      {recipe && (
        <div className="w-full max-w-5xl min-h-[500px] flex flex-col border border-gray-300 gap-4 bg-gray-100/90 text-gray-800 shadow-2xl rounded-md mx-auto my-6 p-8">
          <div className="">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="max-w-6xl md:w-3/4 h-80 object-cover rounded-xl mx-auto"
            />
          </div>
          <div className="">
            <h3 className="text-gray-800 text-2xl font-bold mb-1.5">
              {recipe.strMeal}
            </h3>
            <h4 className="text-gray-700 text-lg font-semibold mb-1.5">
              Category: {recipe.strCategory}
            </h4>
            <p className="text-gray-600 text-base  mb-1.5">
              Area: {recipe.strArea}
            </p>
            <p className="text-gray-500 font-light text-sm/7 mb-1.5">
              Instructions: {recipe.strInstructions}
            </p>
            <div className="mb-1.5">
              Ingredients:
              <ul className="list-disc pl-6 text-sm/5">
                {Object.entries(recipe).map(([key, value]) =>
                  key.startsWith("strIngredient") && value !== "" ? (
                    <li key={key} className="mb-2">
                      {value}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
