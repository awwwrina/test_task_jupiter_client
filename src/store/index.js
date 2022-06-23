import { configureStore } from "@reduxjs/toolkit";
import cards from '../components/cardsSection/cardsSectionSlice';
import filters from '../components/filters/filtersSlice';


const store = configureStore({
    reducer: {cards, filters},
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;