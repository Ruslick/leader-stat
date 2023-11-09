import { useEffect } from "react"
import { getThemeLocalStorage, setThemeLocalStorage } from "../../utils/themeController"

export const useInitTheme = () => {
  useEffect(() => {
    const theme = getThemeLocalStorage()
    if (theme) {
      setThemeLocalStorage(theme)
    }
  }, [])
}