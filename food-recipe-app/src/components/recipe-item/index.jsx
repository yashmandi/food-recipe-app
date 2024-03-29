import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-60 overflow-hidden p-5 bg-white/75 shadow-2xl gap-6 border-2 rounded-2xl border-transparent ">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-center text-sm p-3 mt-5 w-full rounded-lg uppercase font-medium inline-block shadow-md bg-black text-white hover:text-black hover:bg-gray-100 transition-colors duration-300"
        >
          View Recipe
        </Link>
      </div>
      
    </div>
  );
}
