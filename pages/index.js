import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
/*
  - getServerSideProps
  페이지에서 getServerSideProps(서버측 랜더링 SSR) 함수를 export하는 경우
  Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render 한다.
  getServerSideProps는 서버측에서만 실행되며 브라우저(client)에서는 실행되지 않는다.
  ex) export async function getServerSideProps(){
        // fetch data
        const res = await fetch(`http://CallApi URL`)
        const data = await res.json();
        return{
          props: {
            data,
          }
        }
      }
      서버측에서 fetch받아온 값 즉 data를 밑에 예시함수에 props로 던져준다.
                    ↓↓↓↓↓
      export default function 예시함수({data}){
        // data값으로 랜더링...
      }
      받아온 data 값으로 페이지를 랜더링한다.
  ⭐SEO(Search Engine Optimization)가 필요한 페이지라면 getServerSideProps(SSR)을 적용하면 좋을 것 같다.⭐
*/