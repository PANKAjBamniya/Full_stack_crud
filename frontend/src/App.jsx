import React,{useState} from 'react'
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/todos/themeSlice';


const App = () => {

  const {theme} = useSelector((state) => state.theme)

  const dispatch = useDispatch();

  const handletheme = () => {
    dispatch(toggleTheme())
  }
  
  return (

      <div className={theme ? 'dark' : ''}>
        <Navbar theme={theme} handletheme={handletheme}/>
        <Todo/>
      </div> 

  )
}

export default App;