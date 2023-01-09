import { useQuery } from "@tanstack/react-query"

export const useGetProducts = (page?: number) => {
  const query = useQuery(["getProducts", page], async () => {
    const res = await fetch(`https://reqres.in/api/products?page=${page}`)

    if (!res.ok) throw Error("Problem with fetching")

    const data = await res.json()
    return data
  })
  return query
}
