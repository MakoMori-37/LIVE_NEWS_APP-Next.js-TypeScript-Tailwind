import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import fetchNewsByCategory from "../../../libs/fetchNewsByCategory";
import NewsList from "../../../components/NewsList";
import response from "../../../response.json";

function index() {
  const router = useRouter();

  const category: string = router.query.category as string

  if (!category) {
    return <h1>Not found</h1>;
  }

  const [news, setNews] = useState<NewsResponse>(response);
//   console.log(news);
  const loadList = async () => {
    try {
      const data: NewsResponse =
        (await fetchNewsByCategory(category)) || response;
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadList();
  }, [category]);

  return (
    <div>
      <h1 className="headerTitle mb-10">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default index;
