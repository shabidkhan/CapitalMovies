// import bcrypt from "bcryptjs";
import Movie from "../../models/Movie";
// import { signToken } from "../../../utils/auth";
import db from "../../utils/db";

export default async function handler(req, res) {
    const {movie,userInfo} = req.body
    await db.connect();
    const newMovie = new Movie({
        userEmail: userInfo.email,
        name: movie.name,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        title: movie.title,
        original_name: movie.original_name,
        overview: movie.overview,
        media_type: movie.media_type,
        release_date: movie.release_date,
        first_air_date: movie.first_air_date,
        vote_count: movie.vote_count
    });
    const movies = await newMovie.save()
    await db.disconnect()

    // const token = signToken(user)
    try {
        res.send({
            movies
        })
    } catch (error) {
        res.send(error)
    }
    
}

