import { ErrorBoundary } from "react-error-boundary"
import { ErrorBar } from "./components/ErrorBar/ErrorBar"
import { Modal } from "./components/Modal/Modal"
import { ProductTable } from "./components/ProductTable/ProductTable"
import { Search } from "./components/Search/Search"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

export const App = () => {
  const { appState } = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-5">
      <Search />
      <ErrorBoundary fallbackRender={({ error }) => <ErrorBar error={error.message} />}>
        <ProductTable />
      </ErrorBoundary>
      {appState.modal && <Modal />}
    </div>
  )
}
