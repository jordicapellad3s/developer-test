import React, { useEffect, useState } from "react";

export default function App() {
  const [catFact, setCatFact] = useState("");
  const [giphy, setGiphy] = useState("");
  const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
  const catFactUrl = "https://catfact.ninja/fact";
  const giphyUrl = "https://api.giphy.com/v1/gifs/search";

  useEffect(() => {
    callApiCatFact();
  }, []);

  const callApiCatFact = () => {
    fetch(catFactUrl)
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
        const fact = data.fact;
        const catFactSplit = fact.split(" ", 3).join(" ");
        callApiGiphy(catFactSplit);
      });
  };

  const callApiGiphy = (string) => {
    fetch(giphyUrl + `?q=${string}&api_key=${GIPHY_API_KEY}`)
      .then((res) => res.json())
      .then((gifs) => setGiphy(gifs.data[0].images.original.url));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={giphy} alt="gif" />
      <h1>{catFact}</h1>
    </div>
  );
}
