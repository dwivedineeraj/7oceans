import { configureStore } from '@reduxjs/toolkit'
import {leadsSlice, leadsApi} from './features/leadsSlice'

export const store = configureStore({
    reducer: {
        [leadsSlice.reducerPath]: leadsSlice.reducer,
        [leadsApi.reducerPath]: leadsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(leadsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
