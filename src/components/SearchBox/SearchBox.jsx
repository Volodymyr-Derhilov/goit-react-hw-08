import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../../redux/filters/filtersSlice';

function SearchBox() {
    const dispatch = useDispatch();

    const onSearch = (e) => {
        dispatch(changeFilter(e.target.value))
    }

    return (
        <label className={css.label}>
            <span className={css.span}>Find contacts by name/phone</span>
            <input className={css.input} onInput={onSearch}></input>
        </label>
    )    
}

export default SearchBox;