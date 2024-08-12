
export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          className="input"
          placeholder="Type name to Search"
          value={searchText}
          onChange={onSearchChange}
        />
        <button id="clear" className="clear-results" type="button" onClick={() => onSearchChange({ target: { value: '' } })}>
          Clear
        </button>
      </form>
    </div>
  );
}

