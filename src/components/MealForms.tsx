import { motion } from "motion/react";
import { MealFormsProps } from "./Types";
import InputsForm from "./ui/InputsForm";

const MealForms: React.FC<MealFormsProps> = ({
  searchQuery,
  setSearchQuery,
  fetchingData,
}) => {
  //State;

  //Comportements;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchingData();
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   setSearchQuery(event.target.value);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="search"
          placeholder="Search your food ingredient..."
          value={searchQuery || ""}
          onChange={handleChange}
          className="grow border border-gray-400 text-gray-800 p-2 rounded-full max-w-3xl w-full"
        /> */}

        <InputsForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="btn btn-primary w-full max-w-3xl mt-4 bg-blue-500 text-gray-100 hover:bg-blue-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Search
        </motion.button>
      </form>
    </>
  );
};

export default MealForms;
