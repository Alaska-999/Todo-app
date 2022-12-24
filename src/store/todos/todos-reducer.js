const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_COMPLETED = 'DELETE_COMPLETED'

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: Math.random(),
                    title: action.title,
                    completed: false
                }
            ]
        }
        case DELETE_TODO: {
            return state.filter((todo) => todo.id !== action.todoId);
        }
        case TOGGLE_TODO: {
            return state.map((todo) =>
                todo.id === action.todoId ? {...todo, completed: !todo.completed} : todo
            )
        }
        case DELETE_COMPLETED: {
            return state.filter((todo) => todo.completed == false ? todo : '')
        }
        default: {
            return state;
        }
    }
}

export const addTodo = (title) => ({type: ADD_TODO, title})
export const deleteTodo = (todoId) => ({type: DELETE_TODO, todoId})
export const toggleTodo = (todoId) => ({type: TOGGLE_TODO, todoId})
export const deleteCompleted = () => ({type: DELETE_COMPLETED})
