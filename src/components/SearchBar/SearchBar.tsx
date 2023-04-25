import { useState } from "react";

import { Coordinates } from "../../types";

import "./SearchBar.css";

type SearchBarProps = {
  onNewCity: (c: string | Coordinates) => void;
};

const SearchBar = ({ onNewCity }: SearchBarProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value || value.trim().length <= 1) return;

    setValue("");
    onNewCity(value.trim());
  };

  function getCurrentPosition(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      onNewCity({ lat: coords.latitude, lon: coords.longitude });
    });
  }

  return (
    <form className="content-options" onSubmit={ onSubmit }>
      <button type="submit">
        <svg className="icon" height="14" stroke="#fff" strokeWidth="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 100-288 144 144 0 100 288z" />
        </svg>
      </button>
      <input
        type="search"
        placeholder="Enter a city o zip code..."
        value={ value }
        onChange={ onChange }
      />
      <button type="button" onClick={ getCurrentPosition }>
        <svg className="icon" height="14" stroke="#fff" strokeWidth="20" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 110 128 64 64 0 110-128z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
