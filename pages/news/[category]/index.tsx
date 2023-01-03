import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import fetchNewsByCategory from "../../../libs/fetchNewsByCategory";
import NewsList from "../../../components/NewsList";
import response from "../../../response.json";

function index() {
  const router = useRouter();

  if (!router.query.category) {
    return <h1>Not found</h1>;
  }

  const [news, setNews] = useState<NewsResponse>(response);
//   console.log(news);
  const loadList = async () => {
    try {
      const data: NewsResponse =
        (await fetchNewsByCategory(router.query.category)) || response;
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadList();
  }, [router.query.category]);

  return (
    <div>
      <h1 className="headerTitle mb-10">{router.query.category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default index;
