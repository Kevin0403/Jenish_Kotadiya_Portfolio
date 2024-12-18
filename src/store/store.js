import {configureStore} from '@reduxjs/toolkit'
import ThemeSlice from './ThemeSlice';

const store = configureStore({
    reducer: {
        // Add your reducers here
        theme : ThemeSlice
    }
})

export default store;