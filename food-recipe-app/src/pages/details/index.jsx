import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

  console.log(recipeDetailsData, "recipeDetailsData");

  return (
    <div>

      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-cyan-700 font-medium">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {recipeDetailsData?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
              className="text-center text-sm p-3 mt-5 w-56 rounded-lg uppercase font-medium inline-block shadow-md bg-black text-white hover:text-black hover:bg-gray-100 transition-colors duration-300"
            >
              {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                (item) => item.id === recipeDetailsData?.recipe?.id
              ) !== -1
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
          <div>
            <span className="text-3xl font-semibold text-black mb-4">
              Ingredients:
            </span>
            <ul className="flex flex-col gap-1 mt-4">
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span className="text-xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div>
        <div>
          <footer className=" bottom-0 w-full text-center text-gray-600 border-t border-gray-300 pt-4 bg-white">
            © 2024 Yash Mandi. All rights reserved.
          </footer>
        </div>
      </div>
    </div>

  );
}
