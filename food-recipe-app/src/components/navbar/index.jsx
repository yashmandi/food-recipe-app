import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import food from "./food.png";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-4 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 border border-white rounded-lg shadow-2xl p-24">
      <h2 className="text-3xl font-bold text-black hover:text-gray-700 duration-300 mb-2">
        <NavLink to={"/"} >
          <img
            src={food}
            alt="Logo"
            className="h-12 w-12 ml-8"
          />
          EasyEats</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search for Recipe..."
          className="bg-white/75 p-3 px-6 border border-gray-200 rounded-2xl border-1 mb-2 lg:w-96 shadow-xl shadow-gray-300 focus:shadow-gray-100"
        />
      </form>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 font-semibold duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 font-semibold duration-300 ml-4"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
