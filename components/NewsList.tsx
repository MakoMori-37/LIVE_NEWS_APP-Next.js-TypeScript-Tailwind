import Article from "./Article"

type Props = {
    news: NewsResponse
}

function NewsList({news}: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10" >
        {news?.data?.map((article, index) => (
            <Article key={index} article={article}  />
        ))}
    </main>
  )
}

export default NewsList