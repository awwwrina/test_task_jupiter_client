import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, filteredCardsSelector } from "./cardsSectionSlice";

import Filters from '../filters/Filters';
import Card from "../card/Card";

import './cardsSection.scss';

const CardSection = () => {
    const {cards, offset, showBtn} = useSelector(state => state.cards);
    const filteredCards = useSelector(filteredCardsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        cards.length === 0 && dispatch(fetchCards())
    },[])

    function renderItemList(arr) {
        const items = arr.map(item => {
            return(
                <Card {...item} key={item.id}/>    
            )
        })
        return items;
    }
    
    const itemList = renderItemList(filteredCards);

    return(
        <>
            <section className="cards">
                <Filters/>

                <div className="grid">
                    {itemList}
                </div>
                {showBtn && cards.length && 
                <button className="btn btn__loading" onClick={() => dispatch(fetchCards(offset))}>Load more</button>
                }
            </section>
            
        </>
    )
}

export default CardSection;