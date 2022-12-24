export  const selectVisibleTodos = (state, filter ) => {
    switch (filter) {
        case 'all': {
            return state.todosReducer
        }
        case 'active': {
            return state.todosReducer.filter(todo => !todo.completed)
        }
        case 'completed': {
            return state.todosReducer.filter(todo => todo.completed)
        }
        default: {
            return state.todosReducer
        }
    }
}