import React, { useContext, useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "./contexts/ResultContextProvider";

const data = [
  {
    id: 1,
    title: "test 1",
    isVisited: false,
  },
  {
    id: 2,
    title: "Test 2",
    isVisited: false,
  },
  {
    id: 3,
    title: "test 3",
    isVisited: false,
  },
  {
    id: 4,
    title: "adidas",
    isVisited: false,
  },
  {
    id: 5,
    title: "react",
    isVisited: false,
  },
  {
    id: 6,
    title: "asdasdasd",
    isVisited: false,
  },
  {
    id: 7,
    title: "react js",
    isVisited: false,
  },
];

const Search = () => {
  const { searchTerm, setSearchTerm } = useResultContext();
  const [text, setText] = useState("Nike");
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
    }
  }, [debouncedValue]);

  useEffect(() => {
    const autoCompleteDataStored = JSON.parse(
      localStorage.getItem("autoCompleteData")
    );
    if (text) {
      if (localStorage.getItem("autoCompleteData")) {
        setAutoCompleteResult(
          autoCompleteDataStored.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
          )
        );
      } else {
        setAutoCompleteResult(
          data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
          )
        );
      }
    } else {
      setAutoCompleteResult([]);
    }
  }, [text]);

  useEffect(() => {
    const autoCompleteDataStored = JSON.parse(
      localStorage.getItem("autoCompleteData")
    );
  }, []);

  const handleClick = (event) => {
    if (!event.target.classList.contains("isVisited")) {
      event.target.classList.add("isVisited");
    }

    data.find((i) => i.title === event.target.textContent).isVisited = true;
    localStorage.setItem("autoCompleteData", JSON.stringify(data));

    setText(event.target.textContent);
  };

  return (
    <div className="searchBar">
      <img
        alt="Google"
        className="google"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
        title="Google"
      />
      <div className="bar">
        <input
          className="searchInput"
          value={text}
          type="text"
          placeholder="Search something..."
          onChange={(e) => setText(e.target.value)}
        ></input>
        {text && (
          <button type="button" className="clrBtn" onClick={() => setText("")}>
            X
          </button>
        )}
        <img
          alt="Voice"
          className="voice"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
          title="Search by Voice"
        />
        {autoCompleteResult && (
          <div className="autocomplete">
            {autoCompleteResult.map((item) => (
              <div
                className={
                  item.isVisited === true
                    ? "autocomplete-item isVisited"
                    : "autocomplete-item"
                }
                key={item.index}
                onClick={handleClick}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
