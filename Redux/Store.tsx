/**
 * Redux store that manages all our reducers(redux state functions)
 */

import { configureStore } from '@reduxjs/toolkit'
import { MenuReducer, menuSlice } from './Slices/MenuSlice'
import { IndicatorReducer } from './Slices/IndicatorSlice'
import { EditReducer } from './Slices/ComponentSlice';
import { IndicatorTableReducer } from './Slices/IndicatorTableSlice';
import { SubIndicatorReducer } from './Slices/SubIndicatorSlice';
import { ImageReducer } from './Slices/ImageSlice';
import { SubProjectReducer } from './Slices/SubProjectSlice';
// ...

export const store = configureStore({
  reducer: {
    toggleMenu:MenuReducer,
    indicator: IndicatorReducer,
    components:EditReducer,
    indicatorSlice:IndicatorTableReducer,
    subIndicatorSlice:SubIndicatorReducer,
    imageSlice:ImageReducer,
    subProject:SubProjectReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch