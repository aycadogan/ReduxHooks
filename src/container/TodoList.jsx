import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import ToDos from '../components/ToDos'
import AddForm from '../components/AddForm'
import FilterButtons from '../components/FilterButtons'
import {doneToDoAction, deleteToDoAction} from '../redux/action/actions'


const TodoList = () => {

    const [filterValue, setFilterValue] = useState("SHOW_ALL")
    const todoArr = useSelector( state => state.toDoList)
    const dispatch = useDispatch()

    const toggleToDo = id => {
        dispatch(doneToDoAction(id))
    }

    const deleteToDo = id => {
        console.log(id);
        dispatch(deleteToDoAction(id))
      }

    const getVisibleToDos = () => {
        switch(filterValue){
            case "SHOW_ALL":
                return todoArr
            case 'SHOW_ACTIVE':
                return todoArr.filter((todo) => !todo.isDone)
            case 'SHOW_COMPLETED':
                return todoArr.filter((todo) => todo.isDone)
            default:
                break
        }
    }

    const visibleList = getVisibleToDos(todoArr,filterValue)

    return (
        <div>
            <AddForm />
            <FilterButtons setFilterValue={setFilterValue} filterValue={filterValue}/>
            <ToDos todoArr={visibleList} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
            {/* {todoArr && todoArr.map(todo => (
                <ToDos todo={todo} key={todo.id}/>
                
            ))} */}
            
        </div>
    )
}


export default TodoList
