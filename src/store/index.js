import {createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {loadState, saveState} from "./local-storage";

// const defaultState = [
//     {id: 0, title: "hello", completed: true},
//     {id: 1, title: "world", completed: false}
// ]

export const configurateStore = () => {
    const persistedState = loadState()

    const store = createStore(rootReducer, persistedState)

    //нужно затормозить чтоб не выполнялось часто
    store.subscribe(() => {
        saveState({
            todosReducer: store.getState().todosReducer
        })
    })

  return store
}


