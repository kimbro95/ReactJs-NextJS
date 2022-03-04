/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:path",
        destination: "/new/:path",
        permanent: false,
        /*
          Redirects ( URL 변경됨 )
          Redirect를 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect 한다
          Redirect를 사용하려면 next.config.js에서 redirects 키를 사용하면된다.
          ex) /old/ 경로를 /new/ 경로로 바꿔준다 뒤에 :path를 붙일경우 그대로 URL이 가져온다.
              :path 뒤에 * 을 붙이면 뒤에 모든 URL을 가져온다.
          soure : 들어오는 request 경로 패턴 (request 할 경로)
          destination : 라이팅하려는 경로 (redirect 경로)
          permanent : true 일 경우 클라이언트와 검색엔진에 redirect를 영구적으로 cache 하도록 지시하는 308 status code 를 사용
                      false 일 경우 cache되지 않은 307 status code 사용
        */
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
        /*
          Rewrites ( URL 변경 X )
          Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다.
          Rewirtes는 URL 프록시 역할을 하고 destination 경로를 mask 하여 사용가자 사이트에서 위치를 변경하지 않은것 처럼 보이게 한다.
          반대로 redirects은 새 페이로 reroute되고 URL 변경 사항을 표시한다.
          ex) await fetch(`/api/movies`)
          이렇게 코드내에서 /api/movies/ 호출시 URL을 destination에 지정된 경로를 mask 하여 호출해준다.
        */
      },
    ];
  },
}

module.exports = nextConfig
