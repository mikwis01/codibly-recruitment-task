import { Link } from "react-router-dom"

export const Pagination = () => {
  // const handleNextPage = () => {
  //   router.push(`?page=${appState.current_page && appState.current_page + 1}`)
  //   setAppState((prev) => ({ ...prev, current_page: prev.current_page && prev.current_page + 1 }))
  // }

  // const handlePrevPage = () => {
  //   router.push(`?page=${appState.current_page && appState.current_page - 1}`)
  //   setAppState((prev) => ({ ...prev, current_page: prev.current_page && prev.current_page - 1 }))
  // }
  return (
    <div className="w-5/6 h-10 max-w-xs flex items-center justify-between">
      <Link to={`?page=1`}>
        <button
          className={`bg-emerald-700 rounded-md h-full w-20 flex items-center justify-center`}>
          <p>Previous</p>
        </button>
      </Link>
      <Link to={`?page=2`}>
        <button
          className={`bg-emerald-700 rounded-md h-full w-20 flex items-center justify-center`}>
          <p>Next</p>
        </button>
      </Link>
    </div>
  )
}
