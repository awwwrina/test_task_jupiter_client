import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilterChanged } from '../filters/filtersSlice';
import { cardDeleted } from '../cardsSection/cardsSectionSlice';

import { URL } from '../../config';

import './card.scss';

const Card = ({id, label, title}) => {
    const dispatch = useDispatch();

    const [active, setActive] = useState(false);
    let cardClasses = "card";
    if (active) {
        cardClasses += " active";
    }
    const setClasses = (active) => {
        setActive(active => !active);
    }

    const keyDown = (event)  =>{
        if(event.keyCode === 46 && active) {
            dispatch(cardDeleted({id}))
        }
    }   

    const cardsFiltered = (event, label) => {
        event.stopPropagation();
        dispatch(activeFilterChanged(label))
    }
    
    const imgStyle = {"background" : `url(${URL}/${id}.jpg) center center / cover no-repeat`}
    return(
        <>
            <div 
                className={cardClasses} 
                style={imgStyle}
                onClick={() => setClasses(active)}
                onKeyDown={(event) => keyDown(event)}
                tabIndex={0}>
                <p 
                    className="label fz16"
                    onClick={(event) => cardsFiltered(event, label)}
                    >{label}</p>
                <h2 className="title fz40">{title}</h2>
            </div>
        </>
    )
}
export default Card;