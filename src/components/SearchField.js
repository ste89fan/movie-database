import React from "react";

const SearchField = (props) => {
  return (
    <div className="container searchSection">
      <div className="row">
        <form id="searchForm" onSubmit={props.handleSubmit}>
          <div className="formFields">
            <label>Movie :</label>{" "}
            <input
              type="text"
              placeholder="Search for movie..."
              onChange={props.handleMovieName}
            ></input>
          </div>
          <div className="formFields">
            <label>Year :</label>{" "}
            <input
              type="number"
              placeholder="Year when released..."
              onChange={props.handleYear}
            ></input>
          </div>
          <div className="formFields">
            <label>Plot :</label>{" "}
            <select onChange={props.handlePlot}>
              <option value="short">Short</option>
              <option value="full">Full</option>
            </select>
          </div>
          <div>
            <button onClick={props.handleClick}>Confirm</button>
          </div>
          <div>
            <button onClick={props.handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchField;
