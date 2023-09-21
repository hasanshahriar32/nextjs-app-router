"use client";
import React, { useEffect, useState } from "react";
import RandomLoading from "@/components/loading/randomLoading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RandomLoading />;
  }

  return (
    <div>
      <h1 className="text-2xl">This is the home route</h1>
    </div>
  );
};

export default HomePage;
