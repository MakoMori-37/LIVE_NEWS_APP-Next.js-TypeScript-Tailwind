import axios from "axios"

import sortNewsByImage from "./sortNewsByImage"

const fetchNewsByCategory = async (category: string) => {
    console.log({ category })
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MEDIASTACK_URL}news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&categories=${category}`)
        const news = sortNewsByImage(data)
        return news
    } catch (error) {
        console.log(error)
    }
}

export default fetchNewsByCategory