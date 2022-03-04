import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(
      {
        pathname: `/movies/${id}`
      },
      `/movies/${id}`
    )
  };
  /*
    -router.push
    url - Url Object | string 탐색할 URL
    as  - Url Object | string 브라우저 URL 표시줄에 표시될 경로에 대한 선택적 데코레이션 즉 masking
    router.push(url, as, options)
    ex) router.push({
          pathname: `/movies/${id}`,
          query: {
          title,
          id,
        },
        `/movies/${id}`
        })
  */

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
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

  💡 getServerSideProps (https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
  언제 SSR을 사용해야 하는지
  request time에 반드시 데이터를 fetch해야하는 페이지를 pre-render하는 경우에 사용
  데이터를 pre-render할 필요가 없다면 CSR(Client Side Rendering)를 사용하는 것이 좋을 수 있다.
  CSR
  1. 먼저 데이터가 없는 페이지를 직시 표시
  2. 페이지의 일부는 Static Generation을 사용 pre-render할 수 있다.
  3. 없는 데이터를 위해 loading 상태를 표시할 수 있다.
  4. 그런 다음 클라이언트 측에서 데이터를 가져와 준비가되면 표시한다.
*/