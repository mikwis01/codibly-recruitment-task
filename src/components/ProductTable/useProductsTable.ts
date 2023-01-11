import { useSearchParams } from "react-router-dom"

export const useProductTable = () => {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))
  const idFilter = searchParams.get("id") === null ? "all" : Number(searchParams.get("id"))

  return {
    currentPage,
    idFilter
  }
}
