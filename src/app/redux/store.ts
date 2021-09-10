import { applyMiddleware, combineReducers, createStore } from 'redux'
import { CurrentShowReducer } from './reducers/CurrentShow'
import { ShowListReducer } from './reducers/ShowListReducer'
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    ShowListReducer,
    CurrentShowReducer
})

export const store = createStore(allReducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch