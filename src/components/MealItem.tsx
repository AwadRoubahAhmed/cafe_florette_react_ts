import { DataType } from "./Types";

type MealItemProps = {
  meal: DataType;
};

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  return (
    <div
      key={meal.idMeal}
      className="border border-gray-300 p-4 rounded-lg shadow-xl"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="object-cover w-full h-60 rounded-md"
      />
      <h2 className="font-bold text-xl mt-2">{meal.strMeal}</h2>
      <h4 className="text-gray-600 text-sm">{meal.strCategory}</h4>
      <p className="text-gray-600 text-sm">{meal.strTags}</p>
    </div>
  );
};

export default MealItem;
