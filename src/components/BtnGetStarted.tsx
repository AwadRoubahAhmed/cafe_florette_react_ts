import { useNavigate } from "react-router-dom";

const BtnGetStarted = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate("Menu")}
        type="button"
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
        aria-label="Learn more about us"
      >
        Get Started
      </button>
    </>
  );
};

export default BtnGetStarted;
