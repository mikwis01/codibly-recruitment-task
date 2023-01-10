import { Link, useSearchParams } from "react-router-dom"
import { useGetBoundry } from "./useGetBoundry"

type Props = {
  totalPages: number
}

export const Pagination = ({ totalPages }: Props) => {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))
  const nextAv = useGetBoundry(currentPage, totalPages, "add")
  const prevAv = useGetBoundry(currentPage, totalPages, "sub")

  return (
    <div className="w-5/6 h-10 max-w-xs flex items-center justify-between">
      <button
        className={`bg-emerald-700 rounded-md h-full w-20 disabled:opacity-50`}
        disabled={prevAv}>
        <Link
          to={`?page=${currentPage - 1}`}
          className={`w-full h-full flex items-center justify-center ${
            prevAv && "pointer-events-none"
          }`}>
          <p>Previous</p>
        </Link>
      </button>
      <button
        className={`bg-emerald-700 rounded-md h-full w-20 disabled:opacity-50`}
        disabled={nextAv}>
        <Link
          to={`?page=${currentPage + 1}`}
          className={`w-full h-full flex items-center justify-center ${
            nextAv && "pointer-events-none"
          }`}>
          <p>Next</p>
        </Link>
      </button>
    </div>
  )
}
