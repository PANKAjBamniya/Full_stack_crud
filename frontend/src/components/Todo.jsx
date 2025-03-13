
import { useDispatch, useSelector } from 'react-redux';
import ListItems from './ListItems';
import { useEffect, useState } from 'react';
import { addTodos, updateTodo } from '../features/todos/todoSlice';


const Todo = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { edit } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleSubmit = ((e) => {
    e.preventDefault();

    edit.isEdit 
    ? dispatch(updateTodo({id : edit.todo._id , title , description})) 
    : dispatch(addTodos({ title, description }));
    

    
    setTitle("")
    setDescription("")

  })

  useEffect(() => {

    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
    
  }, [edit])
  

  return (
    <div className='w-full h-screen flex gap-2 flex-col items-center p-6 md:p-10 dark:bg-gray-700'>
      <form
      onSubmit={handleSubmit}
        className='md:p-10  p-4 w-[90%] bg-gray-300 dark:bg-gray-800 rounded flex flex-col'
      >
        <span className='flex gap-3 flex-col'>
          <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
            type="text"
            placeholder='Enter your Task'
            className='py-3 rounded px-4 w-[100%]'
            required
          />
          <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className='outline-none rounded p-4' placeholder='Description' rows="4"></textarea>
          <button
            type="submit"
            className='bg-green-600 text-white py-3 px-8 rounded'
          >
            {
              edit.isEdit ? "UPDATE" : "ADD"
            }
          </button>
        </span>
      </form>
      <ListItems/>
    </div>
  );
};

export default Todo;
