import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { authApi } from '../services/authApi'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		auth: authReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)