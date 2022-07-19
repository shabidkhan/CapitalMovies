import axios from "axios";
import Movie from "../../models/Movie";
import db from "../../utils/db";


export default async function handler(req, res) {
    try {
        await db.connect();
        const  movies = await Movie.find({userEmail:req.body});
        await db.disconnect();    
        
        res.status(200).json({data:movies});
    } catch (error) {
        res.status(500).json({error})
    }
    

}