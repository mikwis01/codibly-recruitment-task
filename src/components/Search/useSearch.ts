import { ChangeEvent, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { inputRegex } from "./inputRegex"

export const useSearch = () => {
  const [input, setInput] = useState("")
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const result = inputRegex(event.target.value)

    setInput(result)
  }

  return {
    input,
    currentPage,
    handleInputChange
  }
}
