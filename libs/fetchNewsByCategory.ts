// import axios from "axios"
import { businessData, entertainmentData, generalData, healthData, scienceData, sportsData, technologyData } from '../mockData'
// import sortNewsByImage from "./sortNewsByImage"

const fetchNewsByCategory = async (category: string) => {
    try {
        // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MEDIASTACK_URL}news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&categories=${category}`)
        // const news = sortNewsByImage(data)
        // return news
        switch (category) {
            case 'business':
                return businessData
                break;
            case 'entertainment':
                return entertainmentData
                break;
            case 'general':
                return generalData
                break;
            case 'health':
                return healthData
                break;
            case 'science':
                return scienceData
                break;
            case 'sports':
                return sportsData
                break;
            case 'technology':
                return technologyData
                break;
            default:
                return generalData
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

export default fetchNewsByCategory