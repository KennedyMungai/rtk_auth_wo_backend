import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '../services/authApi'

export const store = configureStore ({
    reducer: {}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>