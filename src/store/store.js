import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, LUSlice, authSlice } from './';


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        LU: LUSlice.reducer,
        ui:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})