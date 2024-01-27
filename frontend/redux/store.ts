import { configureStore } from '@reduxjs/toolkit'
import {leadsSlice} from './features/leadsSlice'

export const store = configureStore({
    reducer: {
        [leadsSlice.reducerPath]: leadsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(leadsSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
