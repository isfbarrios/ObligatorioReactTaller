import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        loadCities: (state, action) => {
            return action.payload
        }
    },
});

export const { loadCities } = citySlice.actions;
export default citySlice.reducer;