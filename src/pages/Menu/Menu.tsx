import { useEffect, useState } from "react";
import { DataType } from "../../components/Types";
import MealItem from "../../components/MealItem";
import MealForms from "../../components/MealForms";

const Menu = () => {
  //State;
  const [data, setData] = useState<DataType[]>([]);
  // const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //Comportements;

  //Récupération des données depuis un API
  const fetchingData = async () => {
    try {
      const response = await fetch(
        `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      setData(data.meals);
      setSearchQuery("");
      //console.log(data);
    } catch (error) {
      console.error("Fetch dataset not found", error);
    }
  };
  useEffect(() => {
    fetchingData();
    return () => {
      // cleanup
    };
  }, []);

  //Affichage(render);
  return (
    <div className="container bg-white">
      <div className="my-12 text-center text-gray-800">
        <h1 className="font-bold text-3xl pt-8">Search Your Food Recipe</h1>
        <h4 className="font-medium px-12 text-lg sm:text-wrap my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nemo
          voluptatem nisi?
        </h4>
      </div>
      <div className="max-w-3xl flex justify-center items-center my-6 mx-auto px-12 ">
        <MealForms
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          fetchingData={fetchingData}
        />
      </div>
      <div className="container max-w-6xl grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-3 px-8 mb-6 mx-auto">
        {data.length > 0 &&
          data.map((meal) => <MealItem meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
};

export default Menu;
