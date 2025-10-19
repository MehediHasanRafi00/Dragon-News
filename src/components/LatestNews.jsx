import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
  const [newsItem, setNewsItems] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("/news.json");
      const data = await res.json();

      const todayNews = data.filter((i) => i.others.is_today_pick);
      setNewsItems(todayNews);
    };

    fetchNews();
  }, []);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee  pauseOnHover={true} speed={60}>
        {newsItem.map(news=> <Link to={`/news-details/${news.id}`} className="mr-10 font-semibold hover:text-blue-500 ">
        {`${news.title} - ${news.author.name}`}
        </Link>)}
      </Marquee>
    </div>
  );
};

export default LatestNews;
