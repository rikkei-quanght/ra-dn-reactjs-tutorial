import postReducer from '../reducers/postReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: postReducer
});

export default store
