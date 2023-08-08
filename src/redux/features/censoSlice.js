import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const censoSlice = createSlice({
    name: "censo",
    initialState,
    reducers: {
        loadCenso: (state, action) => {
            return action.payload
        },
        agregarCenso: (state, action) => {
            return [...state, action.payload]
        },
        borrarCenso: (state, action) => {
            const id = action.payload;
            const listaFiltrada = state.filter(t => t.id != id);
            return listaFiltrada;
        }
    },
});

export const { loadCenso, agregarCenso, borrarCenso } = censoSlice.actions;
export default censoSlice.reducer;