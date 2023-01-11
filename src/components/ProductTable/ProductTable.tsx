import { useErrorHandler } from "react-error-boundary"
import { Pagination } from "../Pagination/Pagination"
import { useGetProducts } from "./useGetProducts"
import { Spinner } from "../Spinner/Spinner"
import { useProductTable } from "./useProductsTable"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

type Product = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export const ProductTable = () => {
  const { currentPage, idFilter } = useProductTable()
  const { data, isSuccess, isLoading, error } = useGetProducts(currentPage)
  const handleError = useErrorHandler()
  const { setAppState } = useContext(AppContext)

  error && handleError(error)

  return (
    <div className="w-5/6 py-8 text-white bg-graySemiDark flex flex-col justify-center items-center gap-5 max-w-lg mt-5 rounded-lg">
      {isLoading && <Spinner />}
      {isSuccess && (
        <>
          <table className="w-5/6 max-w-xs text-center">
            <tbody>
              {idFilter === "all"
                ? data?.data?.map((item: Product) => (
                    <tr
                      onClick={() => setAppState({ modal: true, modalItem: item })}
                      style={{ backgroundColor: `${item.color}` }}
                      className="cursor-pointer hover:scale-105 transition-all"
                      key={item.id}>
                      <td className="border  border-black p-2">{item.id}</td>
                      <td className="border border-black">{item.name}</td>
                      <td className="border border-black">{item.year}</td>
                    </tr>
                  ))
                : data?.data
                    ?.filter((item: Product) => item.id === idFilter)
                    .map((item: Product) => (
                      <tr
                        onClick={() => setAppState({ modal: true, modalItem: item })}
                        style={{ backgroundColor: `${item.color}` }}
                        className="cursor-pointer hover:scale-105 transition-all"
                        key={item.id}>
                        <td className="border border-black p-2">{item.id}</td>
                        <td className="border border-black">{item.name}</td>
                        <td className="border border-black">{item.year}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
          <Pagination totalPages={data?.total_pages} />
        </>
      )}
    </div>
  )
}
