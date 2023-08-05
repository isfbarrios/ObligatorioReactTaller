import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    username: "",
    apikey: "",
    logged: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action) => {
            const { id, username, apikey } = action.payload;
            state.id = id
            state.username = username;
            state.apikey = apikey;
            state.logged = (apikey.length > 0);
        }
    },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;