import { useSelector, useDispatch } from 'react-redux';
import { activeFilterChanged } from './filtersSlice';
import './filters.scss';

const Filters = () => {
    const {filters, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    let filterClasses = "filter fz16";

    return(
        <>
            <div className="tabs">
                {filters.map((item, i) => {
                    return(
                        <button 
                        className={item.title === activeFilter ? `${filterClasses} filter_active` : filterClasses} 
                        key={i}
                        onClick={() => dispatch(activeFilterChanged(item.title))}
                        >
                            {item.title}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default Filters;