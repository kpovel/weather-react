export function SearchForm({onHandleChange, onHandleSubmit, value}) {
    function handleChange(e) {
        onHandleChange(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onHandleSubmit();
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search__input" type="text" autoComplete="off" placeholder="Type the city"
                   onChange={handleChange} value={value} autoFocus={true}/>
            <button className="search__btn" type="submit"/>
        </form>
    );
}