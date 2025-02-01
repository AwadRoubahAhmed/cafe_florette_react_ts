type MealFormsProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchingData: () => Promise<void>;
};

const MealForms: React.FC<MealFormsProps> = ({
  searchQuery,
  setSearchQuery,
  fetchingData,
}) => {
  //State;

  //Comportement;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchingData();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your food ingredient..."
          value={searchQuery || ""}
          onChange={handleChange}
          className="border border-gray-400 text-gray-800 p-2 rounded-full max-w-3xl w-full"
        />
        <button className="btn btn-primary w-full max-w-3xl mt-4 bg-blue-500 text-gray-100 hover:bg-blue-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Search
        </button>
      </form>
    </>
  );
};

export default MealForms;
