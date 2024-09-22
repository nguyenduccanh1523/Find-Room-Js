import React from "react";
import Header from "./Header";
import { Navigation, Search } from "./index";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
       <Header />
        <Navigation />
        <Search />
      <div className="w-4/5 flex flex-col items-start justify-start">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
