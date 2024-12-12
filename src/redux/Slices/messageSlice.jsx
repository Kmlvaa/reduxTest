import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: '',
    message: '',   
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        getMessage: (state, action) => {
            const {status, message} = action.payload
            state.status = status
            state.message = message
        },
    }
})

export const { getMessage } = messageSlice.actions

export default messageSlice.reducer