import { ChangeEvent, useState } from "react"
import { FaSearch } from "react-icons/fa"

export const Search = () => {
  const [input, setInput] = useState("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/[^0-9]/g, "")

    setInput(result)
  }

  return (
    <div className="w-5/6 h-24 text-white bg-graySemiDark flex flex-col justify-center items-center gap-3 max-w-lg mt-5 rounded-lg">
      <div className="w-5/6 max-w-xs flex">
        <input
          className="h-8 w-full rounded-tl rounded-bl indent-2 bg-inherit border border-grayLight"
          type="text"
          placeholder="Search ..."
          onChange={handleInputChange}
          value={input}
        />
        <button className="w-10 h-8 grid place-items-center bg-emerald-700 border border-emerald-700 -ml-[1px] rounded-br rounded-tr">
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
