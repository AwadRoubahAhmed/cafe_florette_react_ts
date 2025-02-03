import { useParams } from "react-router-dom";

// const getRecipe = async ({ recipeId }: GetRecipeProps) => {
//   console.log(recipeId);
//   // Fetch recipe data from an API using the recipeId parameter
//   const res = await fetch(
//     `https://themealdb.com/api/json/v1/1/search.php?s=${recipeId.idMeal}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch recipe data");
//   }
//   // Return the fetched recipe data as JSON
//   return res.json();
// };

const RecipeDetails = () => {
  const { recipeId } = useParams<string>();
  console.log(recipeId);

  // if (!recipe) return <div>No recipe found please try again thanks !</div>;

  return (
    <div className="w-full max-w-6xl h-screen bg-gray-100/90 text-gray-800 my-8 p-8 rounded-lg">
      <h2 className="text-center">Recipe Details: {recipeId}</h2>
      <div>
        {
          // Display recipe details here using the fetched recipe data
        }
      </div>
    </div>
  );
};

export default RecipeDetails;
