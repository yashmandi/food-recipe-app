import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl mt-36 text-center text-black font-extrabold">
              Nothing to show. Please search something
            </p>
          </div>
        )}

      </div>
      <div>
        <footer className="text-center mt-auto text-gray-600 mt-56 border-t border-gray-300 pt-4">
          © 2024 Yash Mandi. All rights reserved.
        </footer>
      </div>
    </div>

  );
}
