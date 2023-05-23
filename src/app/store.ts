import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '../services/authApi'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const store = configureStore ({
    reducer: {}
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>