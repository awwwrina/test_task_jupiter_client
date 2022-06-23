import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilterChanged } from './filtersSlice';
import './filters.scss';

const Filters = () => {
    const {filters, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    let filterClasses = "filter fz16";

    const [dropdown, setDropdown] = useState(false);
    let tabsClasses = "tabs";
    if (dropdown) {
        tabsClasses += " tabs_expanded"
    }
    return(
        <>
            <ul 
                className={tabsClasses}
                onClick={() => setDropdown(!dropdown)}>
                {filters.map((item, i) => {
                    return(
                        <li 
                        className={item.title === activeFilter ? `${filterClasses} filter_active` : filterClasses} 
                        key={i}
                        onClick={() => dispatch(activeFilterChanged(item.title))}
                        tabIndex={0}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Filters;