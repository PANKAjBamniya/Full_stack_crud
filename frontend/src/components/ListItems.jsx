import React, { useEffect } from 'react'
import ListCard from './ListCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../features/todos/todoSlice';


const ListItems = () => {

  const {allTodos , isLoading , isError } = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getTodos())
  },[])

  if(allTodos ===  0){
    return (
      <div className="text-4xl mt-3 dark:text-gray-500">NO Todos yet...</div>
    )
  }
  if(isLoading){
    return(
      <div className="text-4xl mt-3 dark:text-gray-500">Loading...</div>
    )
  }
  if(isError){
    return(
      <div className="text-4xl mt-3 text-red-500">Error Occured</div>
    )
  }

  return (
    <ul className="w-[90%] bg-gray-300 dark:bg-gray-800 rounded gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {
        allTodos.map((todo) => <ListCard key={todo._id} todo={todo}/>)
      }
    </ul>

  )
}

export default ListItems