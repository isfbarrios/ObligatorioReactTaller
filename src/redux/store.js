import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/userSlice";
import departmentReducer from "./features/departmentSlice";
import cityReducer from "./features/citySlice";
import ocupationReducer from "./features/ocupationSlice";
import censoReducer from "./features/censoSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        department: departmentReducer,
        city: cityReducer,
        ocupation: ocupationReducer,
        censo: censoReducer
    },
})
