import { useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@api/baseApi'
import { rtkQueryHandler } from '@api/rtkQueryHandler'

import type { ThunkMiddleware } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'

const apis = [baseApi]

const middlewares = apis.map(api => api.middleware as ThunkMiddleware)

const reducers = {
	// Если приложение использует slice, тогда сюда нужно вставить в формате:
	// [themeSlice.name]: themeSlice.reducer
}

const createRootReducer = () =>
	combineReducers(
		apis.reduce(
			(storeReducers, api) => ({
				...storeReducers,
				[api.reducerPath]: api.reducer,
			}),
			{
				...reducers,
			},
		),
	)

export const store = configureStore({
	reducer: createRootReducer(),
	middleware: gDM => gDM().concat(rtkQueryHandler, ...middlewares),
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
