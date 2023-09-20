"use client";
import React, { useEffect, useState } from "react";
import Loading1 from "@/components/loading/loading1";
import Loading2 from "@/components/loading/loading2";
import Loading3 from "@/components/loading/loading3";

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
    return <Loading3 />;
  }

  return (
    <div>
      <h1 className="text-2xl">This is the home route</h1>
    </div>
  );
};

export default HomePage;
