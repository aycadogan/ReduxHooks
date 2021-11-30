import React,{ useState } from 'react'
import { useSelector } from 'react-redux' 
import ToDos from '../components/ToDos'

const TodoList = () => {

    const [filterValue, setFilterValue] = useState("SHOW_ALL")

    const todoArr = useSelector( state => state.toDoList)

    return (
        <div>
            {  todoArr && todoArr.map(todo => (
                <ToDos todo={todo} key={todo.id}/>
                
            ))}
        </div>
    )
}


export default TodoList
