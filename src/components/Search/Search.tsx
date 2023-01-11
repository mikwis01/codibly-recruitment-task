import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSearch } from "./useSearch"

export const Search = () => {
  const { input, currentPage, handleInputChange } = useSearch()

  return (
    <div className="w-5/6 h-24 text-white bg-graySemiDark flex flex-col justify-center items-center gap-2 max-w-lg mt-5 rounded-lg">
      <label htmlFor="search" className="w-5/6 max-w-xs text-sm">
        Search for products by id
      </label>
      <div className="w-5/6 max-w-xs flex">
        <input
          name="search"
          className="h-8 w-full rounded-tl rounded-bl indent-2 bg-inherit border border-grayLight"
          type="text"
          placeholder="Search ..."
          onChange={handleInputChange}
          value={input}
        />
        <button className="w-10 h-8 bg-emerald-700 border border-emerald-700 -ml-[1px] rounded-br rounded-tr">
          <Link
            to={`/?page=${currentPage}${input !== "" ? `&id=${input}` : ""}`}
            className="w-full h-full grid place-items-center">
            <FaSearch />
          </Link>
        </button>
      </div>
    </div>
  )
}
