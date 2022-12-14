import { createContext, useContext } from 'react'

const ThemeContext = createContext()


export function useTheme() {
   return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {

   const themes = {
      light: {
         primary: '#FFF5E4',
         secondary: '#EE6983',
         accent: '#FFF5E4',
         black: '#181818',
         white: '#FFFFFF',
         green: '#7FB77E',
         blue: "#87A2FB"
      }
   }

   return (
      <ThemeContext.Provider value={themes.light}>
         {children}
      </ThemeContext.Provider>
   )
}