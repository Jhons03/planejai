import { createContext } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}
//criado para colocar os componentes em volta de um provider.
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
