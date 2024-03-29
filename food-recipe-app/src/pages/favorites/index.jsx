import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoritesList && favoritesList.length > 0 ? (
          favoritesList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing is added in favorites.
            </p>
          </div>
        )}
      </div>
      <div>
        <footer className="text-center mt-auto text-gray-600 border-t border-gray-300 pt-4">
          © 2024 Yash Mandi. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
