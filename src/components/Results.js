import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "./contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      // getResults("/?query=Nike&limit=10&related_keywords=true");
      getResults(`/?query=${searchTerm}&limit=10&related_keywords=true`);
    }
  }, [searchTerm, location.pathname]);

  //https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true
  //

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="searchResults">
          {results?.results?.map(({ url, title, description }, index) => (
            <div className="searchResult" key={index}>
              <a href={url} target="_blank" rel="noreferrer">
                <p className="url">{url}</p>
                <p className="title">{title}</p>
                <p className="desc">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      return "ERROR";
  }
};

export default Results;
