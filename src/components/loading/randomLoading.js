import React, { useState, useEffect } from "react";
// import "./loading.css";
import Loading1 from "./loading1";
import Loading2 from "./loading2";
import Loading3 from "./loading3";

const RandomLoading = () => {
  const [selectedSVG, setSelectedSVG] = useState(null);

  // Define an array of SVGs
  const svgs = [
    <Loading1 key="1" />,
    <Loading2 key="2" />,
    <Loading3 key="3" />,
  ];

  useEffect(() => {
    // Randomly select an SVG when the component mounts
    const randomIndex = Math.floor(Math.random() * svgs.length);
    setSelectedSVG(svgs[randomIndex]);
  }, []);

  return (
    <div>
      <main>{selectedSVG}</main>
    </div>
  );
};

export default RandomLoading;
