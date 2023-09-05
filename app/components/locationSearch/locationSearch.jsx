import React from "react";
import styles from "../../page.module.css";
import Loading from "../loading/loading";

const LocationSearch = ({ location, setLocation, loading, fetchForecast, suggestions, isOpen, setIsOpen }) => {
  const handleOnChange = (name) => {
    setIsOpen(true);
    setLocation(name);
  };
  const handleClick = (name) => {
    setLocation(name);
    setIsOpen(false);
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Search location"
        className={styles.input}
        value={location}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      {isOpen && <div className={styles.suggestions}>
        {suggestions.length > 0 ?
        suggestions?.map((suggestion, index) => {
          return (
            <div
              className={styles.suggestion}
              key={index}
              onClick={() => handleClick(suggestion.name, suggestion.state, suggestion.country)}
            >
              <div>
                <span style={{color: "var(--gray200)"}}>
                  {suggestion.name}<span style={{color: "var(--gray400)"}}>, {suggestion.state}</span>
                </span>
              </div> 
              <p style={{color: "var(--gray200)"}}>{suggestion.country}</p>
            </div>
          );
        }
        ) : <div className={styles.suggestion}>
          <p style={{color: "var(--gray200)"}}>No results found</p>
      </div>}
      </div>}
      <button className={styles.button} onClick={fetchForecast}>
        {!loading ? "Search" : <Loading />}
      </button>
    </div>
  );
};

export default LocationSearch;

