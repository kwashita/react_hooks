import React from 'react'
import UseState from './hooks/UseState'
import {ThemesContext, themes} from './themes'
import ParentContext from './hooks/ParentContext'


export default function App() {
  return (
    <>
      <div>App</div>
      <UseState initValue={10}></UseState>

      {/* useContext */}
      <ThemesContext.Provider value={themes}>
        <ParentContext></ParentContext>
      </ThemesContext.Provider>
    </>
  )
}
