import React from 'react';

const Search = ({keyword,setKeyword}) => {
    return (
        <div className="col-sm-6 mb-4">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                className="form-control"
                type="search"
                value={keyword}
                role="searchbox"
                placeholder="Search Students..."
                onChange={(e) => setKeyword(e.target.value)}>

                </input>
            </form>

        </div>
    )
}
export default Search;