import { Pagination } from "../Pagination/Pagination"
import { useGetProducts } from "./useGetProducts"
import { useSearchParams } from "react-router-dom"

type Product = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export const ProductTable = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get("page"))

  const { data } = useGetProducts(Number(searchParams.get("page")))

  return (
    <div className="w-5/6 py-8 text-white bg-graySemiDark flex flex-col justify-center items-center gap-5 max-w-lg mt-5 rounded-lg">
      <table className="w-5/6 max-w-xs text-center">
        <tbody>
          {data?.data?.map((item: Product) => (
            <tr style={{ backgroundColor: `${item.color}` }} key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border">{item.name}</td>
              <td className="border">{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
