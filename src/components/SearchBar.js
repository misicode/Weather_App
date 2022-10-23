export default function SearchBar(props) {
    function pressEnter(event) {
        if (event.keyCode === 13)
            document.getElementById('btnSearch').click();
    }

    return (
        <form className="content-options" onSubmit={ props.onSubmit }>
            <button id="btnSearch" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                id="city"
                type="search"
                placeholder="Enter a city..."
                onKeyDown={ pressEnter }
                onChange={ props.onChange }
            />
            <button id="btnLocation" type="button">
                <i className="fa-solid fa-location-dot"></i>
            </button>
        </form>
    );
}  