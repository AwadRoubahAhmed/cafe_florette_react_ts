import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataType } from "./Types";
import { motion } from "motion/react";

type RecipeDetailsProps = {
  recipeId: string;
};

type ApiDataType = {
  meals: DataType[];
};

export default function RecipeDetails() {
  // State;
  const [recipe, setRecipe] = useState<DataType>();
  const { recipeId } = useParams<RecipeDetailsProps>();
  const navigate = useNavigate();

  // Comportement;
  useEffect(() => {
    //Fetch recipe data from an API using the recipeId parameter$
    console.log("monté du composant");
    fetch(`https:themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => response.json())
      .then((data: ApiDataType) => {
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
        Find your recipe details here
      </h2>
      {recipe && (
        <div className="w-full max-w-5xl min-h-[500px] flex flex-col border border-gray-300 gap-4 bg-gray-100/90 text-gray-800 shadow-2xl rounded-md mx-auto my-6 p-8">
          <div className="">
            <motion.img
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
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

            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => navigate("/Menu")}
              className="btn btn-primary w-full text-gray-100 text-base bg-blue-500 hover:bg-blue-400 px-6 py-3 font-bold rounded-md mt-4 mb-2 cursor-pointer"
            >
              Back to Menu
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
