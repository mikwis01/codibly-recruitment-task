import { useQuery } from "@tanstack/react-query"

type Product = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

type Data = {
  page: number
  per_page: number
  total_pages: number
  data: Array<Product>
  support: {
    url: string
    text: string
  }
}

const isProperData = (data: Data): data is Data => {
  return (data as Data).page !== undefined
}

export const useGetProducts = (page?: number) => {
  const query = useQuery(["getProducts", page], async () => {
    const res = await fetch(`https://reqres.in/api/products?page=${page}`)
    // const res = await fetch(`https://reqres.in/api/products/1`)

    if (!res.ok) {
      if (res.status === 404) throw Error("Eror 400 - Bad request")
      if (res.status === 404) throw Error("Eror 404 - Not found")
      if (res.status === 500) throw Error("Eror 500 - Internal server error")
    }

    const data = await res.json()

    if (!isProperData(data)) throw Error("Wrong data received!")

    return data
  })
  return query
}
