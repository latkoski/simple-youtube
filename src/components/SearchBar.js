import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [search, setSearch] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(search);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video search</label>
                    <input type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    />
                </div>
            </form>    
        </div>
        )
    }

export default SearchBar;