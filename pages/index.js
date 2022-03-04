import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// The Movie DB API Key값
const API_KEY = "fbf3f74be7dc1300d8b6605676a75613";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`)
      ).json();
      //console.log(results);
      setMovieList(results);
    })();
  }, [])

  return (
    <div>
      <Seo title="Home" />
      {!movieList && <h4>Loading...</h4>}
      {movieList?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div >
  );
}