import React, { useContext,useState } from 'react'
import { render } from 'react-dom'

const AppContext = React.createContext()

export const useAppContext = () =>  useContext(AppContext)


const AppContextProvider  = ({children, ...restProps}) => {
  const initialState = {
    appName: 'react-app',
    date: '2022-07-11',
    craetedBy: 'wang',
    theme: 'dark'
  }
  const [appState, setAppState] = useState(initialState)

  const changeAppTheme = theme =>  {
    setAppState(pre => {
      return {
        ...pre,
        theme
      }
    })
  }



  const value = {
    ...restProps,
    ...appState,
    changeAppTheme

  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
