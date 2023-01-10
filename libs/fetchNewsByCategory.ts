// import axios from "axios"
import { businessData, entertainmentData, generalData, healthData, scienceData, sportsData, technologyData } from '../mockData'
import sortNewsByImage from "./sortNewsByImage"

const fetchNewsByCategory = async (category: string) => {
    try {
        // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MEDIASTACK_URL}news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&categories=${category}`)
        // const news = sortNewsByImage(data)
        // return news
        switch (category) {
            case 'business':
                const business = sortNewsByImage(businessData)
                return business
                break;
            case 'entertainment':
                const entertainment = sortNewsByImage(entertainmentData)
                return entertainment
                break;
            case 'general':
                const general = sortNewsByImage(generalData)
                return general
                break;
            case 'health':
                const health = sortNewsByImage(healthData)
                return health
                break;
            case 'science':
                const science = sortNewsByImage(scienceData)
                return science
                break;
            case 'sports':
                const sports = sortNewsByImage(sportsData)
                return sports
                break;
            case 'technology':
                const technology = sortNewsByImage(technologyData)
                return technology
                break;
            default:
                const news = sortNewsByImage(generalData)
                return news
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

export default fetchNewsByCategory