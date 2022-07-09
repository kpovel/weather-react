export {SearchForm};

function SearchForm(props) {
    function handleChange(e) {
        props.onHandleChange(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onHandleSubmit();
    }
    
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search__input" type="text" autoComplete="off" placeholder="Type the city"
                   onChange={handleChange} value={props.value}/>
            <button className="search__btn" type="submit"/>
        </form>
    );
}