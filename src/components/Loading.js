import React from "react";
import Loader, { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader">
      <Rings type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );
};

export default Loading;
