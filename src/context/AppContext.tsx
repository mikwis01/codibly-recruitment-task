import { createContext, Dispatch, SetStateAction, useState } from "react"

type Props = {
  children?: React.ReactNode
}

type Product = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

type AppState = {
  modal: boolean
  modalItem: Product
}

type Context = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
  handleResetState: () => void
}

const initailStateValue = {
  modal: false,
  modalItem: {} as Product
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(initailStateValue)

  const handleResetState = () => setAppState(initailStateValue)

  return (
    <AppContext.Provider value={{ appState, setAppState, handleResetState }}>
      {children}
    </AppContext.Provider>
  )
}
