import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    userEmai:{type:String},
    language:{type:String},
    name:{type:String},
    backdrop_path:{type:String},
    poster_path:{type:String},
    title:{type:String},
    original_name:{type:String},
    overview:{type:String},
    media_type:{type:String},
    release_date:{type:String},
    first_air_date:{type:String},
    vote_count:{type:Number},
},
{
    timestamps:true,
});

const Movie = mongoose.models.Movie || mongoose.model('Movie',movieSchema);

export default Movie;