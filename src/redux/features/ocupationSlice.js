import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const ocupationSlice = createSlice({
    name: "ocupation",
    initialState,
    reducers: {
        loadOcupations: (state, action) => {
            return action.payload
        }
    },
});

export const { loadOcupations } = ocupationSlice.actions;
export default ocupationSlice.reducer;