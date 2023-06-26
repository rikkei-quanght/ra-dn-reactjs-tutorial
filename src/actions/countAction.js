import { createAction } from "@reduxjs/toolkit";

const increment = createAction('increment')

const decrement = createAction('decrement')

export {
    increment,
    decrement
}
