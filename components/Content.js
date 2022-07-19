import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Content = ({data}) => {
  // console.log(data);
  return (
    
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 4xl:flex flex-wrap justify-center">
        {data.map(movie=>(
            <Thumbnail key={movie.id} movie={movie} />
        ))}
    </FlipMove>
  )
}

export default Content