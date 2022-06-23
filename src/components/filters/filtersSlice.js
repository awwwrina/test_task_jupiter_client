import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [
        {title: 'Show All'},
        {title: 'Design'},
        {title: 'Branding'},
        {title: 'Illustration'},
        {title: 'Motion'},
    ],
    activeFilter: 'Show All'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
})
const {actions, reducer} = filtersSlice;

export default reducer;

export const {
    activeFilterChanged
} = actions;