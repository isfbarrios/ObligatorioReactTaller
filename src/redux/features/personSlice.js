import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        loadPersons: (state, action) => {
            return action.payload
        }
    },
});

export const { loadPersons } = personSlice.actions;
export default personSlice.reducer;