import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import ThemeContext from './Context/ThemeContext';

const ChangeThemeSwitch = () => {
  const themeFun = useContext(ThemeContext);
  const toggleTheme = themeFun.changeTheme;
  

  return (
    // <div className='webModeSwitch'><Form><Form.Check type="switch" onChange={toggleTheme} id="custom-switch" label="Web Mode" /></Form></div>
    <></>
  )
}

export default ChangeThemeSwitch
