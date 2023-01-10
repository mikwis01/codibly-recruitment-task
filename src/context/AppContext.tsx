import { createContext, Dispatch, SetStateAction, useState } from "react"

type Props = {
  children?: React.ReactNode
}

type AppState = {
  modal: boolean
}

type Context = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

const initailStateValue = {
  modal: false
}

export const AppContext = createContext({} as Context)

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState(initailStateValue)

  return <AppContext.Provider value={{ appState, setAppState }}>{children}</AppContext.Provider>
}
