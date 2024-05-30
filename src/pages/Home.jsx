import React from "react";
import LatestNews from "../components/molecules/Home/LatestNews";
import PopularArticle from "../components/molecules/Home/PopularArticle";
import Blog from "../components/molecules/Home/Blog";

const Home = () => {
  return (
    <>
      <LatestNews />
      <PopularArticle />
      <Blog />
    </>
  );
};

export default Home;
