import React from 'react'

export const themes = {
    light: {
        color: "skyblue"
    },
    dart: {
        color: "black"
    }
}

export const ThemesContext = React.createContext(themes);