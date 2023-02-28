import React, { createContext, useContext, useState } from "react";
//used this api for Google Search: https://rapidapi.com/herosAPI/api/google-search74/
const ResultContext = createContext();

const baseURL = "https://google-search74.p.rapidapi.com";

//TODO try this api https://rapidapi.com/UnlimitedAPI/api/google-web-search1/pricing
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Nike");

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  //     "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
  //   },
  // };

  //8738defd24mshf53a28f799bf061p100989jsn9307227d9b86
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8738defd24mshf53a28f799bf061p100989jsn9307227d9b86",
      "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    },
  };

  const getResults = async (url) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${url}`, options2);

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
