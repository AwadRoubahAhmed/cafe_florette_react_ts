import { MealFormsProps } from "../Types";

export default function InputsForm({
  searchQuery,
  setSearchQuery,
}: MealFormsProps) {
  // States
  // Comportements
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Search your food ingredient..."
        value={searchQuery || ""}
        onChange={handleChange}
        className="grow border border-gray-400 text-gray-800 p-2 rounded-full max-w-3xl w-full"
      />
    </div>
  );
}
