import { createReducer } from "@reduxjs/toolkit";
import { getPostList } from "../apis/postApi";
import axios from "axios";

const postReducer = createReducer({ posts: [] }, {
    GET_POST_LIST: (state, action) => {
        return {
            ...state,
            posts: action.payload
        }
    }
})

export default postReducer
