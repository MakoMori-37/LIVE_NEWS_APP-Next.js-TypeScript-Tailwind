import React, { useEffect, useState } from "react";
import fetchNews from "../libs/fetchNews";
import NewsList from "./NewsList";
import response from '../response.json'

function Content() {
  const [news, setNews] = useState<NewsResponse>(response)

  const loadList = async () => {
    try {
      const data: NewsResponse = await fetchNews() || response ;
      setNews(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadList()
  }, [])
  
  return <div>
    <NewsList news={news} />
  </div>;
}

export default Content;
