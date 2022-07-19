import axios from "axios";


export default async function handler(req, res) {
    try {
        const request = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`)
        const data = await request.data;    
        
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error})
    }
    

}