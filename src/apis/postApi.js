import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostListApi = async () => {
    let posts = [];
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            posts = response.data
        })
    return posts
}
