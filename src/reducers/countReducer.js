import { createReducer } from "@reduxjs/toolkit";

const countReducer = createReducer({ count: 0 }, {
    increment: (state, action) => {
        return { ...state, count: state.count + action.payload }
    },
    decrement: (state, action) => {
        return { ...state, count: state.count - action.payload }
    },
})

export default countReducer
