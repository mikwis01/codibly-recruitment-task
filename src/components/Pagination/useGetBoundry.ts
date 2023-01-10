export const useGetBoundry = (currentPage: number, totalPages: number, action: "add" | "sub") => {
  if (currentPage === totalPages && action === "add") return true

  if (currentPage === 1 && action === "sub") return true

  return false
}
