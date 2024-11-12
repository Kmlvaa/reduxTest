import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const userState = {
    users: [],
    loading: false,
    error: '',
    userById: []
}

export const getAllUsers = createAsyncThunk(
    'users',
    async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
        return resp.data;
    }
)

export const getUserById = createAsyncThunk(
    'userById',
    async(id) => {
        const resp = await axios.get((`https://jsonplaceholder.typicode.com/users/${id}`));
        console.log(resp.data)
        return resp.data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        //http request olmayanda isledilir
    },
    extraReducers: (builder) => {
        //http request ile islenir
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.error = action.error.message
        })
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.userById = action.payload
        })
    }
})

export const { } = userSlice.actions

export default userSlice.reducer