import { Pagination } from "../Pagination/Pagination"
import { useGetProducts } from "./useGetProducts"
import { useSearchParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"
import { ErrorBar } from "../ErrorBar/ErrorBar"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"

type Product = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export const ProductTable = () => {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get("page") === null ? 1 : Number(searchParams.get("page"))
  const idFilter = searchParams.get("id") === null ? "all" : Number(searchParams.get("id"))

  const { data, isLoading, isError, isSuccess, error } = useGetProducts(currentPage)

  return (
    <div className="w-5/6 py-8 text-white bg-graySemiDark flex flex-col justify-center items-center gap-5 max-w-lg mt-5 rounded-lg">
      <ErrorBoundary fallback={<ErrorBar />}>
        <Suspense fallback={<Spinner />}>
          {isSuccess && (
            <>
              <table className="w-5/6 max-w-xs text-center">
                <tbody>
                  {idFilter === "all"
                    ? data?.data?.map((item: Product) => (
                        <tr style={{ backgroundColor: `${item.color}` }} key={item.id}>
                          <td className="border p-2">{item.id}</td>
                          <td className="border">{item.name}</td>
                          <td className="border">{item.year}</td>
                        </tr>
                      ))
                    : data?.data
                        ?.filter((item: Product) => item.id === idFilter)
                        .map((item: Product) => (
                          <tr style={{ backgroundColor: `${item.color}` }} key={item.id}>
                            <td className="border p-2">{item.id}</td>
                            <td className="border">{item.name}</td>
                            <td className="border">{item.year}</td>
                          </tr>
                        ))}
                </tbody>
              </table>
              <Pagination totalPages={data?.total_pages} />
            </>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
