import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: 'dark',
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', state.theme);
        },
    },
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;