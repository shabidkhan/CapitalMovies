// import axios from "axios";


// export default async function handler(req, res) {
//     try {
//         // const request = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
//         // const data = await request.data;
//         const request = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`)
//         const data = await request.data;     
        
//         res.status(200).json({data})
//     } catch (error) {
//         res.status(500).json({error})
//     }
    

// }

import axios from "axios";


export default async function handler(req, res) {
    try {
        // console.log(`https://api.themoviedb.org/3${req.body.genreUrl}`);
        // JSON.parse(req.body)
        // const request = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`)
        const request = await axios.get(`https://api.themoviedb.org/3${req.body.slice(1, -1)}`)

        const data = await request.data;    
        res.status(200).send({data})
    } catch (error) {
        res.status(500).json({error})
    }
    

}