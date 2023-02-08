import React, { createContext, useEffect, useState } from 'react'
const ThemeContext = createContext();
const ThemeState = (props) => {
    const [theme, setTheme] = useState('light')
    const changeTheme = ()=>{
      if(theme === 'light'){setTheme('dark')}
      else{setTheme('light')}        
    }
    
    useEffect(()=>{
        changeTheme()
        // eslint-disable-next-line 
      },[])
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
     {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
export { ThemeState };
