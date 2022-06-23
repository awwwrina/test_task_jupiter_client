import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { URL } from '../../config';

const initialState = {
    cards: [],
    offset: 0, 
    showBtn: true
}

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async (offset = 0, {rejectWithValue}) => {
        try {
            const response = await fetch(`${URL}/api/cards/cards?limit=${offset+9}&offset=${offset}`);

            if(!response.ok) {
                throw new Error(await response.text())
            }
            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers:{
        cardDeleted(state, action) {
            const {id: actionId} = action.payload;
            const index = state.cards.findIndex(({id}) => id === actionId);
            if (index === -1) {
                return;
            }
            state.cards.splice([index], 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.cards = [...state.cards, ...action.payload];
                if (action.payload.length < 9) {
                    state.showBtn = false;
                }
                state.offset += 9;
            })
            .addDefaultCase(() => {})
    }
});

export const filteredCardsSelector = createSelector(
    state => state.filters.activeFilter,
    state => state.cards.cards,
    (filter, cards) => {
        if (filter === 'Show All') {
            return cards;
        } else {
            return cards.filter(item => item.label === filter);
        }
    }

)

const {actions, reducer} = cardsSlice;

export default reducer;

export const {
    cardsFetched,
    cardDeleted
} = actions;
