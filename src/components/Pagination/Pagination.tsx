import { Link, useSearchParams } from "react-router-dom"

type Props = {
  totalPages: number
}

export const Pagination = ({ totalPages }: Props) => {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))
  console.log(currentPage)
  console.log(totalPages)

  return (
    <div className="w-5/6 h-10 max-w-xs flex items-center justify-between">
      <Link to={`?page=${currentPage === 1 ? 1 : currentPage - 1}`}>
        <button
          className={`bg-emerald-700 rounded-md h-full w-20 flex items-center justify-center`}>
          <p>Previous</p>
        </button>
      </Link>
      <Link to={`?page=${currentPage === totalPages ? currentPage : currentPage + 1}`}>
        <button
          className={`bg-emerald-700 rounded-md h-full w-20 flex items-center justify-center`}>
          <p>Next</p>
        </button>
      </Link>
    </div>
  )
}
