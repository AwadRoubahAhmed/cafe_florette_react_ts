import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <h2>Recipe Details: {recipeId}</h2>
    </div>
  );
};

export default RecipeDetails;
