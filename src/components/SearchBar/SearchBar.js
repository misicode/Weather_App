import '../../assets/Variables.css';
import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="content-options" onSubmit={ props.onSubmit }>
            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                type="search"
                placeholder="Enter a city..."
                onChange={ props.onChange }
            />
            <button type="button" onClick={ props.onClick }>
                <i className="fa-solid fa-location-dot"></i>
            </button>
        </form>
    );
}  