import { ProductTable } from "./components/ProductTable/ProductTable"
import { Search } from "./components/Search/Search"

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Search />
      <ProductTable />
    </div>
  )
}

export default App
