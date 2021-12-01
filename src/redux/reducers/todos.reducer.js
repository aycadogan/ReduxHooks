import {v4 as uuidv4} from 'uuid'
import { DONE_TO_DO, NEW_TO_DO , REMOVE_TO_DO} from '../action/actions'


const initState = {
    toDoList: [
        {id: uuidv4(),content: "Buy Bread",isDone:false},
        {id: uuidv4(),content: "Buy Milk",isDone:true}
    ]
}

const todosReducer = (state = initState, action) => {
    
    switch (action.type) {
        case NEW_TO_DO:
            action.payload.id = uuidv4()
            action.payload.isDone = false

            return {
                ...state,
                toDoList: [...state.toDoList,action.payload]
            };

        case DONE_TO_DO:

            const tempList = state.toDoList.map(item => {
                item.id === action.payload && (item.isDone = !item.isDone )
                return item
            })

            return{
                ...state,
                toDoList: tempList
            }
            
        case REMOVE_TO_DO:

            const newList = state.toDoList.filter(item => item.id !== action.payload)

            return {
                ...state,
                toDoList: newList
            }
    
        default:
            return state;
    }
}

export default todosReducer