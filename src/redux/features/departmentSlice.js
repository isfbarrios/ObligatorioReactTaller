import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        loadDepartments: (state, action) => {
            return action.payload
        }
    },
});

export const { loadDepartments } = departmentSlice.actions;
export default departmentSlice.reducer;