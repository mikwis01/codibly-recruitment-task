import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

const rData = z.object({
  page: z.number(),
  per_page: z.number(),
  total_pages: z.number(),
  data: z.array(z.object({})),
  support: z.object({}).optional()
})

export const useGetProducts = (page?: number) => {
  const query = useQuery(["getProducts", page], async () => {
    const res = await fetch(`https://reqres.in/api/products?page=${page}`)

    if (!res.ok) {
      if (res.status === 404) throw new Error("Eror 400 - Bad request")
      if (res.status === 404) throw new Error("Eror 404 - Not found")
      if (res.status === 500) throw new Error("Eror 500 - Internal server error")
    }

    const data = await res.json()
    const parsed = rData.safeParse(data)

    if (parsed.success) return data

    throw new Error("Wrong data received")
  })
  return query
}
