import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/request/requestSlice'
import carrinhoReducer from '../features/carrinho/carrinhoSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: carrinhoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
