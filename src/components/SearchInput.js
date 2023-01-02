import '../css/SearchInput.css';
import { useState } from 'react';

function SearchInput() {
    const [query, setQuery] = useState('');

    const SearchMovie = () => {
        alert('검색!');
        window.location.href=`/search?query=${query}&ie=utf8&sm=top_hty`;
    }
    const EnterSearchInput = (e) => {
        if(e.keyCode === 13) {
            SearchMovie();
        }
    }

    const inputChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }


    return (
        <div id='searchInput'>
            <input type='text' onChange={inputChange} onKeyDown={EnterSearchInput} />
            <button onClick={SearchMovie}>검색</button>
        </div>
    )
}

export default SearchInput;