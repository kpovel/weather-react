export {SearchForm};

function SearchForm() {
    return (
        <div className="search-form">
            <input className="search__input"
                type="text" autoComplete="off" placeholder="Type the city" id="input"/>
            <button className="search__btn" type="submit"/>
        </div>
    );
}