"use client"
import { createContext, useState } from "react";

export const ThemeCotext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode,setMode] = useState("dark")

    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

    }
    return(
        <ThemeCotext.Provider value={{toggle,mode}}>
        <div className={`theme ${mode}`}>{children}</div>
        </ThemeCotext.Provider>)
}